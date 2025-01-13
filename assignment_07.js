'use strict';

let secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 10;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function (display) {
  document.querySelector('.message').textContent = display;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// displayNumber(secretNumber);
displayMessage('Start Input');

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No Number..');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('header').style.backgroundColor = '#3cce5c';
      document.querySelector('main').style.backgroundColor = '#3cce5c';

      document.querySelector('.number').style.width = '30rem';
    }
    displayNumber(secretNumber);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the Game!');
      displayScore(0);
    }
  }
});

//when check button press
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('header').style.backgroundColor = '#fff';
  document.querySelector('main').style.backgroundColor = '#fff';
  console.log(secretNumber);
});
