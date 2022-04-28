const checker = require("./sudoku_checker");

const validSudoku = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
];


const invalidSudoku = [
    [1, 2, 2, 3, 4, 4, 7, 8, 9],
    [2, 2, 2, 3, 4, 4, 7, 8, 9],
    [3, 2, 2, 3, 4, 4, 7, 8, 9],
    [4, 2, 2, 3, 4, 4, 7, 8, 9],
    [5, 2, 2, 3, 4, 4, 7, 8, 9],
    [6, 2, 2, 3, 4, 4, 7, 8, 9],
    [7, 2, 2, 3, 4, 4, 7, 8, 9],
    [8, 2, 2, 3, 4, 4, 7, 8, 9],
    [9, 2, 2, 3, 4, 4, 7, 8, 9],
];
describe("sudoku checker tests", () => {
    test("Returns true if given input is valid sudoku", () => {
        expect(checker(validSudoku)).toBe(true);
    });

    test("Returns false if given input is invalid sudoku", () => {
        expect(checker(invalidSudoku)).toBe(false);
    });
});