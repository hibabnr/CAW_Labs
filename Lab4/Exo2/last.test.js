// arrayUtils.test.js
const last = require('./last');

describe('last function', () => {
    test('returns the last element when n is omitted', () => {
        const result = last([1, 2, 3]);
        expect(result).toBe(3); 
    });

    test('returns an empty array when array is null', () => {
        const result = last(null, 2);
        expect(result).toEqual([]); 
    });

    test('returns an empty array when n is 0', () => {
        const result = last([1, 2, 3], 0);
        expect(result).toEqual([]); 
    });


    test('returns the entire array if n is greater than array length', () => {
        const result = last([1, 2, 3], 5);
        expect(result).toEqual([1, 2, 3]); 
    });

    test('returns the last element for a single-element array', () => {
        const result = last([1]);
        expect(result).toBe(1); 
    });
});
