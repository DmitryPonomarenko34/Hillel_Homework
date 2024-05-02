const value = +prompt('Введіть ціле число:');

for (let i = 1; i < 100; i++) {
    if (i ** 2 > value) {
        break;
    }

    console.log(i);
}