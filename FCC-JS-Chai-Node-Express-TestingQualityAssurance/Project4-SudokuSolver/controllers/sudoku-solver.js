class SudokuSolver {

  validate(puzzleString) {
    if (!puzzleString) return 'Required field missing';
    if (puzzleString.length !== 81) return 'Expected puzzle to be 81 characters long';
    if (/[^1-9.]/.test(puzzleString)) return 'Invalid characters in puzzle';
    return true;
  }

  // Helper to convert row letter to index
  rowToIndex(row) {
    return row.toUpperCase().charCodeAt(0) - 65;
  }

  // Helper to convert column string to index
  colToIndex(col) {
    return parseInt(col, 10) - 1;
  }

  // Helper to get board as 2D array
  getBoard(puzzleString) {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push(puzzleString.slice(i * 9, (i + 1) * 9).split(''));
    }
    return board;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    let board = this.getBoard(puzzleString);
    let r = this.rowToIndex(row);
    let c = this.colToIndex(column);
    // Ignore current cell
    for (let i = 0; i < 9; i++) {
      if (i !== c && board[r][i] === value) return false;
    }
    return true;
  }

  checkColPlacement(puzzleString, row, column, value) {
    let board = this.getBoard(puzzleString);
    let r = this.rowToIndex(row);
    let c = this.colToIndex(column);
    for (let i = 0; i < 9; i++) {
      if (i !== r && board[i][c] === value) return false;
    }
    return true;
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let board = this.getBoard(puzzleString);
    let r = this.rowToIndex(row);
    let c = this.colToIndex(column);
    let startRow = Math.floor(r / 3) * 3;
    let startCol = Math.floor(c / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if ((i !== r || j !== c) && board[i][j] === value) return false;
      }
    }
    return true;
  }

  solve(puzzleString) {
    if (this.validate(puzzleString) !== true) return false;
    let board = this.getBoard(puzzleString);

    function solveHelper(board) {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (board[r][c] === '.') {
            for (let v = 1; v <= 9; v++) {
              let value = v.toString();
              // Check row, col, region
              let valid = true;
              for (let i = 0; i < 9; i++) {
                if (board[r][i] === value || board[i][c] === value) {
                  valid = false;
                  break;
                }
              }
              if (!valid) continue;
              let startRow = Math.floor(r / 3) * 3;
              let startCol = Math.floor(c / 3) * 3;
              for (let i = startRow; i < startRow + 3; i++) {
                for (let j = startCol; j < startCol + 3; j++) {
                  if (board[i][j] === value) {
                    valid = false;
                    break;
                  }
                }
                if (!valid) break;
              }
              if (valid) {
                board[r][c] = value;
                if (solveHelper(board)) return true;
                board[r][c] = '.';
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    let copy = board.map(row => row.slice());
    if (solveHelper(copy)) {
      return copy.map(row => row.join('')).join('');
    } else {
      return false;
    }
  }
}

module.exports = SudokuSolver;

