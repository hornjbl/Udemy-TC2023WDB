// Number divisible by 3? Fizz
// Number divisble by 5? Buzz
// Number divisble by both 3 and 5? Fizzbuzz
function isFizzBuzz(number) {
    let answer = "";

    if (number % 3 == 0 && number % 5 == 0) {
        answer = `fizzbuzz (${number} / 3 = ${number / 3} & ${number} / 5 = ${number / 5})`;
    } else if (number % 3 == 0) {
        answer = `fizz (${number} / 3 = ${number / 3})`;
    } else if (number % 5 == 0) {
        answer = `buzz (${number} / 5 = ${number / 5})`;
    } else {
        answer = "nope";
    }
    return answer;
}

var numbers = [];

for (let i = 1; i <= 100; i++) {
    numbers.push(i);

    console.log(`${i}: ${isFizzBuzz(i)} `);
}
