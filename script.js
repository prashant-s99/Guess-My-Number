'use strict';

//Defining secret number
let secNum =()=> Math.trunc(Math.random() * 20) + 1;
let secretNumber=secNum();

//Storing secret number in a variable which could be used later also.
const scr = Number(document.querySelector('.score').textContent);
let score = scr;
let highScore = Number(document.querySelector('.highscore').textContent);

const showMessage = (message) => document.querySelector('.message').textContent = message;
const setNumberText = (text) => document.querySelector('.number').textContent = text;

//Main function which has all the conditions.
let mainFunction = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (score > 1 || guess === secretNumber || guess > 20) {
    if (!guess) {
      showMessage('Please enter a number!');
    } else if (guess === secretNumber) {
      showMessage('Correct Number! 🥳');
      setNumberText(secretNumber);
      document.querySelector('body').style.background = 'linear-gradient(to top left, #19ff00, #202720)';
      if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess < 0 || guess > 20) {
      showMessage('Number is not in range! 👎');
    } else if (guess < secretNumber) {
      showMessage('Guess is too low. 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
      showMessage('Guess is too high. 📈');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (score === 1 && guess != secretNumber) {
    showMessage('You Lost The Game!!!');
    document.querySelector('.score').textContent = score - 1;
    setNumberText(secretNumber);
    document.querySelector('body').style.background = 'linear-gradient(to top left, #ff0000, #202720)';
  }
};

//Event Listener when 'Enter' key is pressed.
document.querySelector('.guess').addEventListener("keypress", event =>{ 
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    //Trigger the button element with a click
    document.querySelector(".check").click();
  }
});

//Invoking main function when 'Check' button is clicked.
document.querySelector('.check').addEventListener('click', mainFunction);

//Will be invoked when 'Again' button is clicked.
document.querySelector('.again').addEventListener('click', function () {
  
  document.querySelector('.guess').value = '';
    
  setNumberText('?');
  score = scr;


  showMessage('Start guessing...');
  secretNumber = secNum();
  document.querySelector('body').style.background = 'linear-gradient(to top left, #6a1e52, #202720)';
  document.querySelector('.score').textContent = score;
  mainFunction;
});

//Function to lock focus on the input element('guess').
const inputField = document.getElementsByClassName('guess')[0];

inputField.addEventListener('blur', (event) => event.target.focus());

document.addEventListener('click', (event) => {
  // Check if the clicked element is not the input field
  if (event.target !== inputField) {
    event.preventDefault();
    // Focus the input field
    inputField.focus();
  }
});
