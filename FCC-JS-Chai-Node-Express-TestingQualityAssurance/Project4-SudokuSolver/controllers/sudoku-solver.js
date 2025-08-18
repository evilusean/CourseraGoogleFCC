const completedSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const symmetricDifference = (setA, setB) => {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
};

const isValidValue = (valueSet, value) => {
  const values = new Set(valueSet);
  values.delete(0);
  const validValues = symmetricDifference(values, completedSet);
  return validValues.has(value);
};

class SudokuSolver {
  constructor(puzzleString = null, deterministic = false, verbose = false) {
    this.sudokuBoard =
      Array(9).fill().map(() => Array(9).fill(0));
    if (!!puzzleString) {
      this.setBoardFromString(puzzleString);
    }
  }

  setBoardFromString(puzzleString) {
    if (this.isValidPuzzleString(puzzleString)) {
      puzzleString.split('').forEach((d, i) => {
        const row = Math.floor(i / 9);
        const col = i % 9;
        this.sudokuBoard[row][col] = d !== '.' ? +d : 0;
      });
    }
  }

  getStringFromBoard() {
    const result = [];
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        const value = this.sudokuBoard[row][column];
        result.push(!!value ? value : '.');
      }
    }
    return result.join('');
  }

  toString() {
    return this.getStringFromBoard();
  }

  getCell(row, column) {
    return this.sudokuBoard[row][column];
  }

  setCell(row, column, value) {
    if (/[0-9]/.test(value)) {
      this.sudokuBoard[row][column] = +value;
    }
    return this.getCell(row, column);
  }

  removeCell(row, column) {
    this.sudokuBoard[row][column] = 0;
  }

  getRow(row) {
    return this.sudokuBoard[row];
  }

  getColumn(column) {
    const result = [];
    for (let i = 0; i < 9; i++) {
      result.push(this.sudokuBoard[i][column]);
    }
    return result;
  }

  getRegion(row, column) {
    const result = [];
    const startRow = Math.floor(row / 3) * 3;
    const startColumn = Math.floor(column / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result.push(this.sudokuBoard[startRow + i][startColumn + j]);
      }
    }
    return result;
  }

  getValidPossibleValues(row, column, removeCurrentValue = false) {
    const cellValue = this.getCell(row, column);

    if (removeCurrentValue) {
      this.removeCell(row, column);
    } else if (!!cellValue) {
      return new Set([cellValue]);
    }

    const currentValues = [];
    currentValues.push(this.getRegion(row, column));
    currentValues.push(this.getRow(row));
    currentValues.push(this.getColumn(column));
    const currentSet = new Set(currentValues.flat());
    currentSet.delete(0);
    const possibleValues = symmetricDifference(currentSet, completedSet);
    this.setCell(row, column, cellValue);
    return possibleValues;
  };

  isValidPuzzleString(puzzleString) {
    return this.isValidLength(puzzleString) &&
      this.isValidCharacters(puzzleString);
  }

  isValidLength(puzzleString) {
    return (puzzleString.length === 81);
  }

  isValidCharacters(puzzleString) {
    const puzzleCharacterRegEx = /^[.1-9]+$/;
    return puzzleCharacterRegEx.test(puzzleString);
  }

  isValidRowPlacement(row, column, value) {
    if (this.getCell(row, column)) {
      return false;
    } else {
      return isValidValue(this.getRow(row), value);
    }
  }

  isValidColumnPlacement(row, column, value) {
    if (this.getCell(row, column)) {
      return false;
    } else {
      return isValidValue(this.getColumn(column), value);
    }
  }

  isValidRegionPlacement(row, column, value) {
    if (this.getCell(row, column)) {
      return false;
    } else {
      return isValidValue(this.getRegion(row, column), value);
    }
  }

  isValidBoard() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        const cellValue = this.getCell(row, column);
        const validValues = this.getValidPossibleValues(row, column, true);
        if (cellValue && !validValues.has(cellValue)) {
          return false;
        }
      }
    }
    return true;
  }

  isBoardSolved() {
    const diff = symmetricDifference(this.sudokuBoard.flat(), completedSet);
    return this.isValidBoard() && diff.size === 0;
  }

  solve() {
    const getCellWithLeastValidValues = () => {
      const result = {
        'row': 9,
        'column': 9,
        'values': [],
      };
      let minCount = 9;

      for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
          if (this.getCell(row, column) === 0) {
            const values = this.getValidPossibleValues(row, column);
            if (values.size < minCount) {
              minCount = values.size;
              result['row'] = row;
              result['column'] = column;
              result['values'] = [...values];
            }
          }
        }
      }
      return result;
    };

    const heuristic_solver = () => {
      if (this.isBoardSolved()) {
        return true;
      }
      const cell = getCellWithLeastValidValues();
      for (let i = 0; i < cell.values.length; i++) {
        this.setCell(cell.row, cell.column, cell.values[i]);
        if (heuristic_solver()) {
          return true;
        }
        this.removeCell(cell.row, cell.column);
      }
      return false;
    };

    if (!this.isValidBoard()) {
      return 'invalid board';
    }

    if (heuristic_solver()) {
      return this.getStringFromBoard();
    } else {
      return 'Unsolvable puzzle layout';
    }
  }
}

module.exports = SudokuSolver;

