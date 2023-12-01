"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d === 0) {
        arr.push(-b / (2 * a));
    }
    if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a)); // (-b + Math.sqrt(d) )/(2*a)
        arr.push((-b - Math.sqrt(d)) / (2 * a)); // (-b - Math.sqrt(d) )/(2*a)
    }
    return arr;
}

// console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const percentRelativePerMonth = percent / 1200;
    const creditBody = amount - contribution;
    const monthlyPayment =
        creditBody *
        (percentRelativePerMonth /
            (1 - Math.pow(1 + percentRelativePerMonth, -countMonths)));
    const totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
    return totalAmount;
}

// console.log(calculateTotalMortgage(10, 0, 50000, 12));
