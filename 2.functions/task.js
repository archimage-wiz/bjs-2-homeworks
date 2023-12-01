"use strict";

function getArrayParams(...arr) {
    if (arr.length === 0) {
        return {
            min: 0,
            max: 0,
            avg: 0,
        };
    }
    let minVal = Infinity;
    let maxVal = -Infinity;
    let averageVal = 0;
    for (let currentValue of arr) {
        if (currentValue < minVal) {
            minVal = currentValue;
        }
        if (currentValue > maxVal) {
            maxVal = currentValue;
        }
        averageVal += currentValue;
    }
    averageVal /= arr.length;
    averageVal = Number(averageVal.toFixed(2));
    return { min: minVal, max: maxVal, avg: averageVal };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let currentValue of arr) {
        sum += currentValue;
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let result = getArrayParams(...arr);
    return result.max - result.min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let evenSum = 0;
    let oddSum = 0;
    for (let currentValue of arr) {
        if (currentValue % 2 === 0) {
            evenSum += currentValue;
        } else {
            oddSum += currentValue;
        }
    }
    return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let averageValOfEvenElements = 0;
    let countOfEvenElements = 0;
    for (let item of arr) {
        if (item % 2 === 0) {
            averageValOfEvenElements += item;
            countOfEvenElements++;
        }
    }
    return averageValOfEvenElements / countOfEvenElements;
}

// // summElementsWorker
// console.log(summElementsWorker()); // 0
// console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// // differenceMaxMinWorker
// console.log(differenceMaxMinWorker()); // 0
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// // differenceEvenOddWorker
// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// // averageEvenElementsWorker
// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork(arrOfArr, func) {
    let maxWorkerResult = 0;
    for (let arr of arrOfArr) {
        let workerResult = func(...arr);
        if (workerResult > maxWorkerResult) {
            maxWorkerResult = workerResult;
        }
    }
    return maxWorkerResult;
}

// const arr = [
//     [10, 10, 11, 20, 10],
//     [67, 10, 2, 39, 88],
//     [72, 75, 51, 87, 43],
//     [30, 41, 55, 96, 62],
// ];

// console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
// console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
// console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
