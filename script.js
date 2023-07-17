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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

//Storing secret number in a variable which can be used later also.
const scr = Number(document.querySelector('.score').textContent);
let score = scr;

//Main function which has all the conditions.
let mainFunction = function () {
  let guess = Number(document.querySelector('.guess').value);

  if (score > 1 || guess === secretNumber || guess > 20) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Please enter a number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number! 🥳';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'Green';
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
  } else if (score === 1 && guess != secretNumber) {
    document.querySelector('.message').textContent = 'You Lost The Game!!!';
    document.querySelector('.score').textContent = score - 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'Red';
  }
};

//Invoking main function when 'Check' button is clicked.
document.querySelector('.check').addEventListener('click', mainFunction);

//Will be invoked when 'Again' button is clicked.
document.querySelector('.again').addEventListener('click', function () {
  score = scr;
  const guess = document.querySelector('.guess');
  const clear = document.querySelector('.again');
  clear.addEventListener('click', () => {
    guess.value = '';
  });
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = 'rgb(33, 34, 33';
  document.querySelector('.score').textContent = 5;
  mainFunction;
});
