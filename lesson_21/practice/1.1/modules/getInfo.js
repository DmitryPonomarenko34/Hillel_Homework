const idBlock = document.querySelector('#id');
const controllerBlock = document.querySelector('#controller');
const infoBlock = document.querySelector('#info');

function showData(endpoint, data) {
  const parts = endpoint.split('/');

  controllerBlock.textContent = parts[0];
  idBlock.textContent = parts[1];

  infoBlock.innerHTML = data;
}

function showError(err) {  
  controllerBlock.textContent = '';
  idBlock.textContent = '';

  infoBlock.innerHTML = err;
}

export const getInfo = async (endpoint) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    const json = await response.json();
    
    if (!response.ok) {      
      throw new Error(json.detail);
    }

    showData(endpoint, JSON.stringify(json, null, 2));

  } catch(err) {
    showError(err);
  }
}