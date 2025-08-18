'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  const solver = new SudokuSolver();

  // Convert 'A1' to [0,0], 'B2' to [1,1], etc.
  const convertCoordinate = (coordinate) => {
    const result = coordinate.split('');
    result[0] = result[0].codePointAt(0) - 'A'.codePointAt(0);
    result[1] = +result[1] - 1;
    return result;
  };

  const getPuzzleStringError = (puzzleString) => {
    if (!solver.isValidPuzzleString(puzzleString)) {
      if (!solver.isValidLength(puzzleString)) {
        return {error: 'Expected puzzle to be 81 characters long'};
      } else if (!solver.isValidCharacters(puzzleString)) {
        return {error: 'Invalid characters in puzzle'};
      } else {
        return {error: 'Unknown error, this is a bug'};
      }
    } else {
      return {error: 'Valid puzzle passed to getPuzzleStringError function, this is a bug'};
    }
  };

  app.route('/api/check')
    .post((req, res) => {
      try {
        const {puzzle = null, coordinate = null, value = null} = req.body;
        if (!puzzle || !coordinate || !value) {
          return res.json({error: 'Required field(s) missing'});
        } else if (!/^[A-I][1-9]$/.test(coordinate)) {
          return res.json({error: 'Invalid coordinate'});
        } else if (!/^[1-9]$/.test(value)) {
          return res.json({error: 'Invalid value'});
        } else if (!solver.isValidPuzzleString(puzzle)) {
          return res.json(getPuzzleStringError(puzzle));
        } else {
          solver.setBoardFromString(puzzle);
          const [row, column] = convertCoordinate(coordinate);
          const conflicts = [];
          if (!solver.isValidRowPlacement(row, column, +value)) conflicts.push('row');
          if (!solver.isValidColumnPlacement(row, column, +value)) conflicts.push('column');
          if (!solver.isValidRegionPlacement(row, column, +value)) conflicts.push('region');
          if (!conflicts.length) {
            return res.json({valid: true});
          } else {
            return res.json({valid: false, conflict: conflicts});
          }
        }
      } catch (err) {
        res.status(500).json({error: 'Internal Server Error', details: err.message});
      }
    });

  app.route('/api/solve')
    .post((req, res) => {
      try {
        if (!!req.body.puzzle) {
          const puzzle = req.body.puzzle;
          if (solver.isValidPuzzleString(puzzle)) {
            solver.setBoardFromString(puzzle);
            const solution = solver.solve();
            const solutionErrorRegEx = /timeout|invalid|Unsolvable/;
            res.json(solutionErrorRegEx.test(solution)
              ? {error: 'Puzzle cannot be solved'}
              : {solution: solution});
          } else {
            res.json(getPuzzleStringError(puzzle));
          }
        } else {
          res.json({error: 'Required field missing'});
        }
      } catch (err) {
        res.status(500).json({error: 'Internal Server Error', details: err.message});
      }
    });
};
