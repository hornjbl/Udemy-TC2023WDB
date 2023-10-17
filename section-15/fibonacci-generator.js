function fibonacciGenerator(n) {
    let arrFib = [];
    let prevNumber = 0;
    let prevPrevNumber = 0;
    let newNumber = 0;

    for (let i = 0; i < n; i++) {
        newNumber = prevNumber + prevPrevNumber;

        arrFib.push(newNumber);

        if (newNumber == 0) {
            prevNumber = 1;
        }

        prevPrevNumber = prevNumber;
        prevNumber = newNumber;
    }

    return arrFib;
}

console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(10));
