const checker = require("./sudoku_checker");

const validSudoku = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
];


const invalidSudoku = [
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
];
describe("sudoku checker tests", () => {
    test("Returns true if given input is valid sudoku", () => {
        expect(checker(validSudoku)).toBe(true);
    });

    test("Returns false if given input is invalid sudoku", () => {
        expect(checker(invalidSudoku)).toBe(false);
    });
});