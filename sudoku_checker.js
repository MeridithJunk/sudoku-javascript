function horizontal_and_vertical_checker(sudoku) {
    let result = true;
    for (let row = 0; row <= 8; row++) {
        let sudokuSetHorizontal = new Set();
        let sudokuSetVertical = new Set();
        for (let col = 0; col <= 8; col++) {
            sudokuSetHorizontal.add(sudoku[row][col]);
            sudokuSetVertical.add(sudoku[col][row]);
        }
        if (sudokuSetHorizontal.size !== 9 || sudokuSetVertical.size !== 9) {
            result = false
        }
    }
    return result;
}

function singleBoxChecker(rowStart, rowEnd, colStart, colEnd, sudoku) {
    let result = true;
    let blockChecker = new Set();
    for (let row = rowStart; row <= rowEnd; row++) {
        for (let column = colStart; column <= colEnd; column++) {
            let number = sudoku[row] [column];
            blockChecker.add(number);
        }
    }

    if (blockChecker.size !== 9) {
        result = false;
    }

    return result;
}

function box_checker(sudoku) {
    let boxOne = singleBoxChecker(0, 2, 0, 2, sudoku);
    let boxTwo = singleBoxChecker(0, 2, 3, 5, sudoku);
    let boxThree = singleBoxChecker(0, 2, 6, 8, sudoku);
    let boxFour = singleBoxChecker(3, 5, 0, 2, sudoku);
    let boxFive = singleBoxChecker(3, 5, 3, 5, sudoku);
    let boxSix = singleBoxChecker(3, 5, 6, 8, sudoku);
    let boxSeven = singleBoxChecker(6, 8, 0, 2, sudoku);
    let boxEight = singleBoxChecker(6, 8, 3, 5, sudoku);
    let boxNine = singleBoxChecker(6, 8, 6, 8, sudoku);
    return boxOne && boxTwo && boxThree
        && boxFour && boxFive && boxSix
        && boxSeven && boxEight && boxNine;
}

function checker(sudoku) {
    return box_checker(sudoku) && horizontal_and_vertical_checker(sudoku);
}

module.exports = checker;
