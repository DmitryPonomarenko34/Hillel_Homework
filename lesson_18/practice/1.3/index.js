const response = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const box = document.querySelector('#box');

response
  .then((data) => data.json())
  .then((data) => {
    const dollar = data.find((item) => item.cc === 'USD');
    box.textContent = `Поточний курс доллара: ${dollar.rate} UAH`; 
  })
  .catch(() => {
    box.textContent = `Відбулась помилка`;
  });