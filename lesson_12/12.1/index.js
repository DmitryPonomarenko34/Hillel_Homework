const btnPrompt = document.querySelector('#btnPrompt');
const btnNav = document.querySelector('#btnNav');

let navigateURL = '';

btnPrompt.addEventListener('click', () => {
  const url = prompt('Введіть нову адресу:');

  if (url) {
    navigateURL = url;
    btnNav.removeAttribute('disabled');
  }
});

btnNav.addEventListener('click', () => {
  location.href = navigateURL;
})