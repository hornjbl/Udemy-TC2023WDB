function fibGen(n) {
    let arrFib = [];
    let prevVal = 0;
    let prevPrevVal = 0;

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            prevVal = 0;
            prevPrevVal = 0;
        } else if (i == 1) {
            prevVal = 1;
            prevPrevVal = 0;
        } else {
            prevVal = arrFib[i - 1];
            prevPrevVal = arrFib[i - 2];
        }

        arrFib.push(prevVal + prevPrevVal);
    }

    return arrFib;
}

console.log(fibGen(10));
