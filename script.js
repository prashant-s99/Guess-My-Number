'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🥳 Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//Defining secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

//Storing secret number in a variable which can be used.
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Please enter a number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number! 🥳';
    } else if (guess < 0 || guess > 20) {
      document.querySelector('.message').textContent =
        'Number is not in range! 👎';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Guess is too low. 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Guess is too high. 📈';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game!!!';
    document.querySelector('.score').textContent = score - 1;
  }
});

document.querySelector('.again').addEventListener('click', function () {});
