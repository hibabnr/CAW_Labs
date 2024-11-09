const chunk = require('./chunk');

describe('chunk function', () => {
    test('splits an array of 5 elements into chunks of 2', () => {
        const result = chunk([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('splits an array of 4 elements into chunks of 3', () => {
        const result = chunk([1, 2, 3, 4], 3);
        expect(result).toEqual([[1, 2, 3], [4]]);
    });

    test('returns an empty array when input array is empty', () => {
        const result = chunk([], 2);
        expect(result).toEqual([]);
    });

   
});
