let buttons = document.querySelector('[data-btns-div]');

let playerOutput = document.getElementById('player');
let compOutput = document.querySelector('#comp');

let userScore = 0;
let computerScore = 0;
let heads = 1;
let tails = 0;

let p = document.createElement('p');
 
 
//this will change according to the random number
function headsAndTails(random) {
		if (random === 1) {
				let showTails = document.querySelector('.tails');
				showTails.textContent = 'Heads';
				showTails.style.color = 'red';
		}
		
		if (random === 0) {
				let showTails = document.querySelector('.tails');
				showTails.textContent = 'Tails';
				showTails.style.color = '';
		}
}

//random number either be 1 or 0
function score(random, userChoose, computerChoose) {
		if (random === userChoose) {
				playerOutput.style.color = 'green';
				playerOutput.style.fontWeight = 'bold';
			 userScore++;
				playerOutput.textContent = `Player: ${userScore}`;
				compOutput.style.color = 'red';
		} else if (random === computerChoose) {
				compOutput.style.color = 'green';
				compOutput.style.fontWeight = 'bold';
				playerOutput.style.color = 'red';
				computerScore++;
				compOutput.textContent = `Computer: ${computerScore}`;
		}
		//calling this function here so it won't get delay showing the heads and tails
		headsAndTails(random);
}

function animate(r, u, c) {
		let tails = document.querySelector('.tails');
	 	let heads = document.querySelector('.heads');
  tails.classList.toggle('active');
 	 heads.classList.toggle('active');
		tails.addEventListener('animationend', () => {
		console.log(tails.classList.contains('acitve'))
		tails.classList.remove('active');
		  	heads.classList.remove('active');
					score(r, u, c);
				
		})	

}


function winner() {
		if (userScore === 3) {		
				p.innerHTML		= `You Won!!!`
		} else if (computerScore === 3) {
				p.innerText = 'Computer won!'
		}
		document.querySelector('.container').append(p);
}

buttons.addEventListener('click', (e) => {
		let userSelection;
		let computerSelection;
		
		//this will generate a new number everytime we call on click function, math.round will round the number to nearest integer
	let randomNumber = Math.round(Math.random()); //0 or 1
		console.log(randomNumber)	
			
			if (e.target.dataset.head)	{
					userSelection = heads;
					computerSelection = tails;	
		//			animate(randomNumber, userSelection, computerSelection);
			//1 is heads and 0 is tails line 8 and 9
			} else if (e.target.dataset.tail) {
				userSelection = tails;
				computSelection = heads;			
			}
//animate();	
	animate(randomNumber, userSelection, computerSelection);

	//call the score function here and add the userSelection and computerSelection
		//	score(randomNumber, userSelection, computerSelection);
			winner()
		})

