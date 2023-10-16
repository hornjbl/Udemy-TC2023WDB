function calcBMI(weight, height) {
    const calcBMI = Math.round(weight / (height * height));

    if (calcBMI < 18.5) {
        return `Your BMI is ${calcBMI}, so you are underweight.`;
    } else if (calcBMI >= 18.5 && calcBMI <= 24.9) {
        return `Your BMI is ${calcBMI}, so you have a normal weight.`;
    } else if (calcBMI > 24.9) {
        return `Your BMI is ${calcBMI}, so you are overweight.`;
    } else {
        return `Your BMI is ${calcBMI}.`;
    }
}

console.log(calcBMI(60, 2));
console.log(calcBMI(80, 2));
console.log(calcBMI(100, 2));
