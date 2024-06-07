"use strict";
const ACTIVE = 'active';

const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const dots = document.querySelector('#dots');

slider.firstElementChild.classList.add(ACTIVE);

for (let index = 0; index < slides.length; index++) {
  const btn = document.createElement('button');

  btn.setAttribute('id', index);
  dots.appendChild(btn);
}


const disableControlBtn = () => {
  const isFirstSlideActive = slides[0].classList.contains(ACTIVE);
  const isLastSlideActive = slides[slides.length - 1].classList.contains(ACTIVE);
  
  isFirstSlideActive ? prevBtn.disabled = true : prevBtn.disabled = false;
  isLastSlideActive ? nextBtn.disabled = true : nextBtn.disabled = false;
}

disableControlBtn();


nextBtn.addEventListener('click', () => {
  const currentSlide = slider.querySelector(`.${ACTIVE}`);
  const nextSlide = currentSlide.nextSibling.nextSibling;

  currentSlide.classList.remove(ACTIVE);
  nextSlide.classList.add(ACTIVE);

  disableControlBtn();
});

prevBtn.addEventListener('click', () => {
  const currentSlide = slider.querySelector(`.${ACTIVE}`);
  const prevSlide = currentSlide.previousElementSibling;

  currentSlide.classList.remove(ACTIVE);
  prevSlide.classList.add(ACTIVE);

  disableControlBtn();
});

dots.addEventListener('click', (event) => {
  const target = event.target;
  const previousDot = dots.querySelector(`.${ACTIVE}`); 

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const slideId = target.getAttribute('id');
  const previousSlide = slider.querySelector(`.${ACTIVE}`);

  previousSlide.classList.remove(ACTIVE);
  slides[slideId].classList.add(ACTIVE);

  disableControlBtn();
});