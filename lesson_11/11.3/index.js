const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

function setSrcAttr() {
    const randomNum = Math.floor(Math.random() * (7 - 1 + 1) + 1);

    img.setAttribute('src', `${randomNum}.jpg`);

    console.log('ra', randomNum);
    
}

window.onload = function () {
    setSrcAttr();

    btn.addEventListener('click', function () {
        setSrcAttr();
    })
};