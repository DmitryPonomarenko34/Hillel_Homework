const value = prompt("Введіть 3 числа:");

if (value[0] === value[1] && value[0] === value[2] && value[1] === value[2]) {
    alert('Усі числа однакові');
} else if (value[0] === value[1] || value[0] === value[2] || value[1] === value[2]) {
    alert('Є однакові числа.');
}

