function checker(sudoku) {
    let sudokuSet = new Set();
    for(let num = 0; num <= 8; num++)
    {
        sudokuSet.add(sudoku[0][num]);
    }
    return sudokuSet.size === 9;
}

module.exports = checker;
