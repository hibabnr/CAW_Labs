const first = require('./first');

describe('first function', () => {
    test('returns the first element when n is omitted', () => {
        const result = first([1, 2, 3]);
        expect(result).toBe(1); 
    });

    test('returns an empty array when n is 0', () => {
        const result = first([1, 2, 3], 0);
        expect(result).toEqual([]); 
    });

    test('returns an empty array when n is negative', () => {
        const result = first([1, 2, 3], -1);
        expect(result).toEqual([]); 
    });

    test('returns the entire array if n is greater than array length', () => {
        const result = first([1, 2, 3], 5);
        expect(result).toEqual([1, 2, 3]); 
    });
});
