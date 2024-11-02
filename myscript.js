'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  // restore the function
  document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Please Enter the value';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });

  //
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter the value';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'there is too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost The game !';
      document.querySelector('.score').textContent = 0;
    }

    // document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'there is too low 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost The game !';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').textContent = '?';

    //  high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent =
//       'hello there is no number ';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'corrected';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent="you lost the game";
//       document.querySelector('.message').textContent = 'Too high 📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost the Game 💥';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low📉 ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost the Game 💥';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
