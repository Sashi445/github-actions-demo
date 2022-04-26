const sum = require("./sum.js");

test('Adds 1 + 2 to be equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
});