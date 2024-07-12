const box = document.querySelector('#box');

(async function () {
  const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  const data = await response.json();

  const dollar = data.find((item) => item.cc === 'USD');
  box.textContent = `Курс доллара: ${dollar.rate} UAH`;
})()