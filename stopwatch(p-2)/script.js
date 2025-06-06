
//Timer 
const timerHourInput = document.querySelector('#sw-input-h');
const timerMinuteInput = document.querySelector('#sw-input-m');
const timerSecondInput = document.querySelector('#sw-input-s');
const timerStartbtn = document.querySelector('#sw-start-btn');
const timerPausebtn = document.querySelector('#sw-pause-btn');
const timerResetbtn = document.querySelector('#sw-reset-btn');
const timerBody = document.querySelector('.sw-body');

let timeinterval;

let timerS,timerM,timerH;
let timerstop = false;
function Timer(){
  let timerS = parseInt(timerSecondInput.value);
  let timerM = parseInt(timerMinuteInput.value);
  let timerH = parseInt(timerHourInput.value);
  
  
  
  

  timerH = isNaN(timerH) ? 0 : timerH;
  timerM = isNaN(timerM) ? 0 : timerM;
  timerS = isNaN(timerS) ? 0 : timerS;

  clearInterval(timeinterval);

  timerSecondInput.value = timerS;
  timerMinuteInput.value = timerM;
  timerHourInput.value = timerH;

  timeinterval = setInterval(()=>{
    if (timerS === 0 &&
      timerM === 0 &&
      timerH === 0) {
      clearInterval(timeinterval);
      timerSecondInput.value = 0;
      timerBody.textContent = 'times up';
      timerStartbtn.style.display = 'inline-block';
      return;
    }

    if (!timerstop) {
      
    
      if (timerS >= 0) {
        
        timerSecondInput.value = timerS;
        
      } else{
        if (timerM > 0) {
          
          timerM--;
          timerSecondInput.value = 59;
          timerS = 59;
          timerMinuteInput.value = timerM;
        } else {
          if (timerH > 0) {
            timerH --;
            timerMinuteInput.value = 59;
            timerSecondInput.value = 59;
            timerS = 59;
            timerM=59;
            timerHourInput.value = timerH;
          }
        }
      }
    
    
    timerS --;
    };
    
  },1000);
  };

timerStartbtn.addEventListener('click',()=>{
  timerstop = false;
  Timer();
  timerStartbtn.style.display = 'none';
  timerBody.textContent = '';
});
timerPausebtn.addEventListener('click',()=>{
  timerstop = true;
  timerStartbtn.style.display = 'inline-block';

})

timerResetbtn.addEventListener('click',()=>{
  timerSecondInput.value = '';
  timerMinuteInput.value = '';
  timerHourInput.value = '';
  clearInterval(timeinterval);
  timerStartbtn.style.display = 'inline-block';
  timerBody.textContent = '';
})

//stop watch//
const swInput = document.querySelector('#timer-input');
const swstartbtn = document.querySelector('#timer-start-btn');
const swstoptbtn = document.querySelector('#timer-stop-btn');
const swsresetbtn = document.querySelector('#timer-reset-btn');
const swBody = document.querySelector('.timer-body');
const swhour = document.querySelector('.timer-h-h1');
const swminute = document.querySelector('.timer-m-h1');
const swsecond = document.querySelector('.timer-s-h1');
const swmilisecond = document.querySelector('.timer-ms-h1');

let swinterval;
let isstop = false;
let sw = 0;
let sw_milisecond = 0;
let sw_minute = 0;
let sw_hour = 0;
swsecond.textContent = `${sw}`;
swmilisecond.textContent = `${sw_milisecond}`;
swminute.textContent = `${sw_minute}`;
swhour.textContent = `${sw_hour}`;
function StopWatch(){
  
  clearInterval(swinterval);
  swminute.textContent = 0;
  swhour.textContent = 0;
  swinterval = setInterval(()=>{

    if (!isstop) {
      
    
    swsecond.textContent = `${sw}`;
    swmilisecond.textContent = `${sw_milisecond}`;
    swminute.textContent = `${sw_minute}`;
    swhour.textContent = `${sw_hour}`;
    
    
    sw_milisecond ++;
    if (sw_milisecond ===100) {
      sw ++;
      sw_milisecond = 0;
      
    }
    } else {
      swsecond.textContent = `${sw}`;
      swmilisecond.textContent = `${sw_milisecond}`;
      swminute.textContent = `${sw_minute}`;
      swhour.textContent = `${sw_hour}`;
    }
    if (sw === 60) {
      sw = 0;
      sw_minute ++;
      swminute.textContent = sw_minute;
    }
    if (sw_minute === 60) {
      sw_minute = 0;
      sw_hour ++;
      swhour.textContent = sw_minute;
    }
  },10);

}

swstartbtn.addEventListener('click',()=>{
  isstop = false;
  StopWatch();
});

swstoptbtn.addEventListener('click',()=>{
  isstop = true;
  StopWatch();
  
})


swsresetbtn.addEventListener('click',()=>{
  
  
  sw = 0;
  sw_milisecond = 0;
  sw_minute = 0;
  sw_hour = 0;
  swsecond.textContent = `${sw}`;
  swmilisecond.textContent = `${sw_milisecond}`;
  swminute.textContent = `${sw_minute}`;
  swhour.textContent = `${sw_hour}`;
  
  clearInterval(swinterval);
})




