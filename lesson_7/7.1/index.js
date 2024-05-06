function calc() {
    let result = 0;

    return (num) => result += num;
}

const sum = calc();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27