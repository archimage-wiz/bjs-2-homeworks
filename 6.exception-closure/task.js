function parseCount(number) {
    number = Number.parseFloat(number);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(numberToParse) {
    try {
        return parseCount(numberToParse);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = validateCount(a);
        this.b = validateCount(b);
        this.c = validateCount(c);
        if (a + b < c || a + c < b || b + c < a || c + a < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = (1 / 2) * (this.a + this.b + this.c);
        return Number(
            Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
        );
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}
