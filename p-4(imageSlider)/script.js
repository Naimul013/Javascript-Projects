const image = document.querySelector('.slide-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const images = [
  'images/logo.png.png',
  'images/poster-1.webp',
  'images/poster-2.webp'
];kw

let currentIndex = 0;

function update(){
  image.src= images[currentIndex];
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  update();
});

prevBtn.addEventListener('click',()=>{
  currentIndex = (currentIndex -1 + images.length) % images.length;
  update();
})