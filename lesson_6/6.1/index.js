function removeSymbols(string, symbols = []) {
    const regExp = new RegExp(`[${symbols.join('')}]`, "g");
    return string.replace(regExp, '');
}

console.log(removeSymbols(" hello world", ['l', 'd']));