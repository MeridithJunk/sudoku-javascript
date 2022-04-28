function checker(sudoku) {
    let result = true;
    for (let row = 0; row <= 8; row++) {
        let sudokuSetRows = new Set();
        let sudokuSetCol = new Set();
        for (let col = 0; col <= 8; col++) {
            sudokuSetRows.add(sudoku[row][col]);
            sudokuSetCol.add(sudoku[col][row]);
        }
        if (sudokuSetRows.size !== 9 || sudokuSetCol.size !== 9) {
            result = false
        }
    }
    return result;
}

module.exports = checker;
