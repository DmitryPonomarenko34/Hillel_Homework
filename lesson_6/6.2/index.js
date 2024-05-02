// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calcAvgNum() {
    let result= 0;
    let addends = 0;

    for (let i = 0; i <= arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            result += arguments[i];
            addends++
        }

        if (arguments.length === i) {
            result /= addends;
        }

    }

    return result;
}

console.log(calcAvgNum(2, 3, {}, 3, 5, true, 7, 10));