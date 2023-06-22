const playerText = document.querySelector('.player');
const computerText = document.querySelector('.computer');
const resultText = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const body = document.body;
const userscore = document.querySelector('.userscore');
const computerscore = document.querySelector('.computerscore');

// variables
let player;
let computer;
let result;
let userScore = 0;
let computerScore = 0;
// addEventListener
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		player = btn.textContent;
		computerClick();
		playerText.textContent = `Player: ${player}`;
		computerText.textContent = `Computer: ${computer}`;
		resultText.textContent = checkWinner();

		if (resultText.textContent === 'You Win !!') {
			userScore++;
			body.style.backgroundColor = 'green';
			userscore.textContent = `UserScore :${userScore}`;
		} else if (resultText.textContent === 'You loose !!') {
			computerScore++;
			body.style.backgroundColor = 'red';
			computerscore.textContent = `ComputerScore :${computerScore}`;
		} else {
			body.style.backgroundColor = 'white';
		}
	});
});

// function
function computerClick() {
	// random number from 1 to 3
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	switch (randomNumber) {
		case 1:
			computer = 'Rock';
			break;
		case 2:
			computer = 'Scissors';
			break;
		case 3:
			computer = 'Paper';
			break;
	}
}

// function
function checkWinner() {
	if (player === computer) {
		return 'Draw!!';
	} else if (player === 'Rock') {
		return computer === 'Scissors' ? 'You Win !!' : 'You loose !!';
	} else if (player === 'Paper') {
		return computer === 'Rock' ? 'You Win !!' : 'You loose !!';
	} else if (player === 'Scissors') {
		return computer === 'Paper' ? 'You Win !!' : 'You loose !!';
	}
}
