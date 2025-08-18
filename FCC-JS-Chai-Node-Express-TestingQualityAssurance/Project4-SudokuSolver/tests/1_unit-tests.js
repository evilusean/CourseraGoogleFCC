const chai = require('chai');
const assert = chai.assert;

const SudokuSolver = require('../controllers/sudoku-solver.js');
let solver = new SudokuSolver();

const validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9..5.....1.4.2.3.6.9.7..';
const invalidCharPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9..5.....1.4.2.3.6.9.7X.';
const shortPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9..5.....1.4.2.3.6.9.7';
const unsolvablePuzzle = '9'.repeat(81); // Example of unsolvable
const validSolution = '135762984946381257728459613694517832812936745357824196583297461471685329269143578';

suite('Unit Tests', () => {
  test('Logic handles a valid puzzle string of 81 characters', () => {
    assert.equal(solver.validate(validPuzzle), true);
  });

  test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
    assert.equal(solver.validate(invalidCharPuzzle), 'Invalid characters in puzzle');
  });

  test('Logic handles a puzzle string that is not 81 characters in length', () => {
    assert.equal(solver.validate(shortPuzzle), 'Expected puzzle to be 81 characters long');
  });

  test('Logic handles a valid row placement', () => {
    assert.isTrue(solver.checkRowPlacement(validPuzzle, 'A', '1', '7'));
  });

  test('Logic handles an invalid row placement', () => {
    assert.isFalse(solver.checkRowPlacement(validPuzzle, 'A', '1', '1'));
  });

  test('Logic handles a valid column placement', () => {
    assert.isTrue(solver.checkColPlacement(validPuzzle, 'A', '1', '7'));
  });

  test('Logic handles an invalid column placement', () => {
    assert.isFalse(solver.checkColPlacement(validPuzzle, 'A', '1', '1'));
  });

  test('Logic handles a valid region (3x3 grid) placement', () => {
    assert.isTrue(solver.checkRegionPlacement(validPuzzle, 'A', '1', '7'));
  });

  test('Logic handles an invalid region (3x3 grid) placement', () => {
    assert.isFalse(solver.checkRegionPlacement(validPuzzle, 'A', '1', '1'));
  });

  test('Valid puzzle strings pass the solver', () => {
    assert.isString(solver.solve(validPuzzle));
  });

  test('Invalid puzzle strings fail the solver', () => {
    assert.isFalse(solver.solve(unsolvablePuzzle));
  });

  test('Solver returns the expected solution for an incomplete puzzle', () => {
    assert.equal(solver.solve(validPuzzle), validSolution);
  });
});
