//accessing to the variables//
const questionh1 = document.querySelector('.question-h1');
const options = [
  document.querySelector('#option-1'),
  document.querySelector('#option-2'),
  document.querySelector('#option-3'),
  document.querySelector('#option-4'),
];
const optionDiv = document.querySelector('.options')
const feedback = document.querySelector('.feedback');
const nextbtn = document.querySelector('#next-btn')
const retrybtn = document.querySelector('#retry-btn');


//array containing question//
let questions = [
  {
    question : 'What is the capital of Bangladesh?',
    options : ['Madrid','Berlin','Dhaka','Paris'],
    answer : 2
  },
  {
    question : 'Who is the president of America?',
    options : ['Bush','Trum','Biden','Obama'],
    answer : 1
  }

];

let questionsIndex = 0;
let score = 0;

function loadquestion() {

  feedback.textContent = '';
  feedback.style.backgroundColor = 'inherit';
  
  retrybtn.style.display = 'none';
  questionh1.textContent = questions[questionsIndex].question;

  options.forEach((option,index) => {
    option.textContent = questions[questionsIndex].options[index];
    option.disabled = false;
    option.style.backgroundColor = '#eee';
    option.style.color = 'black';
  });
};



function handleclick(event){
  const clickedIndex = options.indexOf(event.target);
  const correctIndex = questions[questionsIndex].answer;

  //disabling further click//
  options.forEach(btn =>{
    btn.disabled = true;
    
});

  if (clickedIndex === correctIndex) {
    feedback.textContent = 'correct';
    feedback.style.backgroundColor = 'green';
    feedback.style.padding = '5px 10px';
    feedback.style.margin = '0px 10px';
    feedback.style.color = 'white';
    options[clickedIndex].style.backgroundColor = 'green';
    options[clickedIndex].style.color = 'white';

    score ++;
  } else {
    feedback.textContent = 'incorrect';
    feedback.style.backgroundColor = 'red';
    feedback.style.padding = '5px 10px';
    feedback.style.margin = '0px 10px';
    feedback.style.color = 'white';
    options[clickedIndex].style.backgroundColor = 'red';
    options[clickedIndex].style.color = 'white';

  }

};

options.forEach(btn => btn.addEventListener('click',handleclick));

nextbtn.addEventListener('click',()=>{
  questionsIndex ++;
  if (questionsIndex < questions.length) {
    loadquestion();
    
  } else {
    questionh1.textContent = 'Quiz Completed.';
    
    feedback.textContent = `Your score is ${score} out of ${questions.length}` ;
    feedback.style.backgroundColor = 'inherit';
    feedback.style.color = 'black';
    optionDiv.style.display = 'none';
    nextbtn.style.display = 'none';
    retrybtn.style.display = 'inline-block';
    
  };
});

retrybtn.addEventListener('click',()=>{
  questionsIndex = 0;
  score = 0;
  optionDiv.style.display = 'block';
  nextbtn.style.display = 'inline-block';
  loadquestion();
  options.forEach(btn =>{
    btn.disabled = false;

});
});



loadquestion();