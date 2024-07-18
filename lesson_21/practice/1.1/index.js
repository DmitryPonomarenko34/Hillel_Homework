import { getInfo } from "./modules/getInfo.js";
const form = document.querySelector('#form');
const infoBlock = document.querySelector('#info');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  infoBlock.textContent = 'loading...';

  getInfo(data.endpoint);
})