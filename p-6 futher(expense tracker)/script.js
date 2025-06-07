//accessing dom//
const dateList = document.querySelector('#date-list');
const title = document.querySelector('#title')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const submitBtn = document.querySelector('#submit')

//arrays
const days = JSON.parse(localStorage.getItem('days')) || [];
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function saveDays(){
  let dateValue= date.value;
  let weekDays = new Date(dateValue).toLocaleDateString('en-US',{weekday: 'long'}); //getting weekdays data//

  let day = {
    id : Date.now(),
    weekDays,
    dateValue
  };

  days.push(day);
  localStorage.setItem('days',JSON.stringify(days));
  date.value = '';
}

function displayDays(){
  dateList.innerHTML = '';

  days.forEach(day => {

    const li = document.createElement('li');
    li.innerHTML = `
    ${day.dateValue} - ${day.weekDays}
    `;
    dateList.appendChild(li);

  });
};

submitBtn.addEventListener('click',()=>{
  saveDays();
  displayDays();
});

displayDays();

