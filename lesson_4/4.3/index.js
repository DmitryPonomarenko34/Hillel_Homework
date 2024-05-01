const birthdate = +prompt('Ваш рік народження:');
const city = prompt('В якому місті ви живете:');
const sport = prompt('Ваш улюблений вид спорту:');
let userCity = '';

switch (city?.toLowerCase()) {
    case 'київ':
    case 'вашингтон':
    case 'лондон':
        userCity = `Ти живеш у столиці ${city}`;
        break;
    default:
        userCity = `Ти живеш у місті ${city}`;
}

switch (sport?.toLowerCase()) {
    case 'волейбол':
        alert('Круто! Хочеш стати як Мазенко Богдан ?')
        break;
    case 'футбол':
        alert('Круто! Хочеш стати як Анатолій Трубін ?')
        break;
    case 'баскетбол':
        alert('Круто! Хочеш стати як Олексій Лень ?')
        break;
}

alert(`Тобі ${new Date().getFullYear() - birthdate}. ${userCity}.`);

switch (null) {
    case birthdate:
        alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження.');
        break;
    case city:
        alert('Шкода, що Ви не захотіли ввести своє місто.');
        break;
    case sport:
        alert('Шкода, що Ви не захотіли ввести свій(ю) улюблений вид спорту.');
        break;
}
