function getUserValue() {
    for (let i = 0; i < 10; i++) {
        const userValue = +prompt('Введіть число більше 100');

        switch (true) {
            case i === 9:
            case userValue > 100:
                console.log(userValue);
                return;
            default:
                alert('Треба ввести число більше 100');
        }
    }
}

getUserValue();