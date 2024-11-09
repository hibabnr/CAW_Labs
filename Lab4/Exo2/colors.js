function colors(array) {
    if (!Array.isArray(array)) return '';
    return {
        toString: array.toString(),
        joinComma: array.join(),
        joinNoDelimiter: array.join('')
    };
}

module.exports = colors;