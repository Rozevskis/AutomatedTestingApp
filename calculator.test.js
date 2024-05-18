// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
});
