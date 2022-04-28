const checker = require("./sudoku_checker");

describe("sudoku checker tests", () => {
    test("Returns true if given input is valid sudoku", () => {
        expect(checker()).toBe(true);
    });

    test("Returns false if given input is invalid sudoku", () => {
        expect(checker()).toBe(false);
    });
});