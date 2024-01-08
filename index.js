'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let Score = 20;

const setText = (className, text) => {
  document.querySelector(`.${className}`).textContent = text;
};

document.querySelector('.reset').addEventListener('click', function () {
  random = Math.trunc(Math.random() * 20) + 1;
  setText('realNum', '?');
  document.querySelector('.num').value = '';
  Score = 20;
  setText('score', Score);
  setText('msg', 'Start Guessing');
});

document.querySelector('.check').addEventListener('click', function () {
  let num = Number(document.querySelector('.num').value);

  if (num === random) {
    setText('msg', 'Your Guess is right!!');
    setText('realNum', random);

    if (Score > document.querySelector('.highscore').textContent)
      setText('highscore', Score);
  } else {
    setText(
      'msg',
      num > random ? 'too large , guess Again!!' : 'too small , guess Again!!'
    );
    Score--;
  }
  setText('score', Score);
});
