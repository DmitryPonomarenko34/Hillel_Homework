function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Дані завантажено';
      resolve(data);
      // або
      // reject('Помилка завантаження');
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} і оброблено`;
      resolve(processedData);
    }, 1000);
  });
}

function updateUI(processedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(processedData);
      resolve();


    }, 1000);
  });
}

// Виклик функцій
loadData()
  .then(processData)
  .then(updateUI)
  .catch((error) => console.error(`Помилка: ${error}`))
  .finally(() => console.log('Операції завершено'));
