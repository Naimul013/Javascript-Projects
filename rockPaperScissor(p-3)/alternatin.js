const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const choosing = document.querySelector('.choosing');
const result = document.querySelector('.result');
const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');

let container = [
  {
    option : 'rock',
    win : 'scissor',
    lost : 'paper'
  },
  {
    option : 'paper',
    win : 'rock',
    lost : 'scissor'
  },
  {
    option : 'scissor',
    win : 'paper',
    lost : 'rock'
  }
];

let self_score = 0;
let computer_score = 0;
let self_choose;

let yourscore_p = document.createElement('h4');
yourscore_p.textContent = `${self_score}`;
yourScore.appendChild(yourscore_p);

let computerscore_p = document.createElement('h4');
computerscore_p.textContent = `${computer_score}`;
computerScore.appendChild(computerscore_p);
function computerChoose(){
  yourScore.innerHTML = '';
  computerScore.innerHTML = '';
  result.innerHTML = '';
  let comIndex = Math.floor(Math.random() * container.length);
  let compch = container[comIndex]
  let computer_choice = compch.option;

  let computer_choose_p = document.createElement('p');
  computer_choose_p.textContent = `Computer choose ${computer_choice}`;
  choosing.appendChild(computer_choose_p);
  
  if (self_choose === compch.win) {
    let winner = document.createElement('h1');
    winner.className = 'lost-p'
    winner.textContent= 'You Lost';
    result.appendChild(winner);
    computer_score ++;
  } else if (self_choose === compch.lost) {
    let winner = document.createElement('h1');
    winner.className = 'win-p'
    winner.textContent= 'You win';
    result.appendChild(winner);
    self_score ++;
  } else {
    let winner = document.createElement('h1');
    winner.className = 'draw-p';
    winner.textContent= "It's a draw";
    result.appendChild(winner);
  }

  let yourscore_p = document.createElement('h4');
  yourscore_p.textContent = `${self_score}`;
  yourScore.appendChild(yourscore_p);

  let computerscore_p = document.createElement('h4');
  computerscore_p.textContent = `${computer_score}`;
  computerScore.appendChild(computerscore_p);
  
};


function handleclick(option){
  choosing.innerHTML = '';
  self_choose = option;
  let choosing_p = document.createElement('p');
  choosing_p.textContent = `You choose ${self_choose}!`;
  choosing.appendChild(choosing_p);

  computerChoose();
};

rock.addEventListener('click',()=>handleclick('rock'));
paper.addEventListener('click',()=>handleclick('paper'));
scissor.addEventListener('click',()=>handleclick('scissor'));

