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
    let percentRelativePerMonth = percent / 100 / 12;
    let creditBody = amount - contribution;
    let monthlyPayment =
        creditBody *
        (percentRelativePerMonth +
            percentRelativePerMonth /
                ((1 + percentRelativePerMonth) ** countMonths - 1));
    let totalAmount = monthlyPayment * countMonths;
    return Number(totalAmount.toFixed(2));
}

// console.log(calculateTotalMortgage(10, 0, 50000, 12));
