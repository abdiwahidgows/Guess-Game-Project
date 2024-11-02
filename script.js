'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Corrext the number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;

// document.querySelector('.score').textContent = 288;

// document.querySelector('.guess').value = 200;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

const mahir = document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'none';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corrext the number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'is too High 📈';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'is too Low 📉';
  }
});
