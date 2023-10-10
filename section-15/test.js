function randFunction() {
    var n = Math.random();

    n = n * 6;
    // n = Math.floor(n) + 1;
    n = Math.ceil(n);

    return n;
}

console.clear();

for (var i = 0; i < 10; i++) {
    console.log(randFunction());
}
