const checker = require("./sudoku_checker");

const validSudoku = [
    [1, 3, 2, 5, 4, 6, 8, 7, 9],
    [4, 5, 9, 7, 1, 8, 3, 2, 6],
    [7, 8, 6, 9, 2, 3, 4, 1, 5],
    [9, 4, 8, 6, 7, 1, 2, 5, 3],
    [3, 6, 1, 8, 5, 2, 7, 9, 4],
    [2, 7, 5, 4, 3, 9, 1, 6, 8],
    [8, 9, 4, 2, 6, 7, 5, 3, 1],
    [6, 1, 7, 3, 8, 5, 9, 4, 2],
    [5, 2, 3, 1, 9, 4, 6, 8, 7]
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