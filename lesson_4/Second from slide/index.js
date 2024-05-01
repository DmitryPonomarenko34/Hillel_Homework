let value = prompt('Введіть число:');

switch (Number(value)) {
    case 1:
        console.log('a');
        break;
    case 2:
        console.log('b');
        break;
    case 3:
        console.log('c');
        break;
    default:
        console.log('UA');
}

// 2. Дано два різні числа. Визначити, яка з них більша, а яка менша.
const valueArray = value.trim().split(' ').filter(item => item);
const firstNum = +valueArray[0];
const secondNum = +valueArray[1];

if (valueArray.length === 2) {
    alert(firstNum > secondNum ? `${firstNum} більше за ${secondNum}` : `${secondNum} більше за ${firstNum}`);
}

// 3. Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
if (value.length === 2) {
    alert(+value[0] > +value[1] ? `${value[0]} більше за ${value[1]}` : `${value[1]} більше за ${value[0]}`);
}

// 4. Дано число. Визначити, парне воно чи ні
alert(+value % 2 === 0 ? 'Число парне' : 'Число непарне');

// 5. Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
alert(value.trim()[value.trim().length - 1] % 2 === 0 ? 'Останнє число парне' : 'Останнє число непарне');

// 6. Дано число, перевірити, чи воно входить в діапазон від 0 до 500. Якщо число входить у діапазон, виводимо “Входить”. Інакше "Не входить".
alert(+value <= 500 && value >= 0 ? 'Входить.' : 'Не входить.');