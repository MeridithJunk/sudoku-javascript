function checker(sudoku) {
    let result = true;
    for (let row = 0; row <= 8; row++) {
        let sudokuSet = new Set();
        for (let col = 0; col <= 8; col++) {
            sudokuSet.add(sudoku[row][col]);
        }
        if (sudokuSet.size !== 9) {
            result = false
        }
    }
    return result;
}

module.exports = checker;
