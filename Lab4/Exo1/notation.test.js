// exo2.test.js
const mean = require('./notation.js');

describe('mean function', () => {
    test('calculates mean of [85, 90, 50, 92]', () => {
        const result = mean([85, 90, 50, 92]);
        expect(result).toBe(79.25);
    });

    test('calculates mean of an empty array', () => {
        const result = mean([]);
        expect(result).toBeNaN(); 
    });

    test('calculates mean of [10, 20, 30]', () => {
        const result = mean([10, 20, 30]);
        expect(result).toBe(20);
    });

    test('calculates mean of a single-element array', () => {
        const result = mean([100]);
        expect(result).toBe(100);
    });

    test('calculates mean of negative numbers [-10, -20, -30]', () => {
        const result = mean([-10, -20, -30]);
        expect(result).toBe(-20);
    });
});
