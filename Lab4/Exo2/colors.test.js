// stringUtils.test.js
const colors = require('./colors');

describe('colors function', () => {
    const myColor = ["Red", "Green", "White", "Black"];

    test('concatenates with .toString()', () => {
        const result = colors(myColor);
        expect(result.toString).toBe('Red,Green,White,Black');
    });

    test('concatenates with .join() (comma delimiter)', () => {
        const result = colors(myColor);
        expect(result.joinComma).toBe('Red,Green,White,Black');
    });

    test('concatenates with .join(\'\') (no delimiter)', () => {
        const result = colors(myColor);
        expect(result.joinNoDelimiter).toBe('RedGreenWhiteBlack');
    });
});
