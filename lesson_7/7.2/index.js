function name(x) {
    return function solve(y) {
        return x * y;
    }
}

name(5)(2);

