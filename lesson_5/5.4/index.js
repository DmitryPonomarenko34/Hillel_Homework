const value = +prompt('Введіть ціле число:');

function isPrime(number) {
    if (number <= 1) {
        return;
    }

    const limit = Math.sqrt(number);

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return;
        }
    }

    console.log('Число просте');
}

isPrime(value);