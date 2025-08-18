const chai = require('chai');
const assert = chai.assert;
const SudokuSolver = require('../controllers/sudoku-solver.js');
const solver = new SudokuSolver();

// Use the first puzzle and solution from puzzle-strings.js
const validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
const validSolution = '135762984946381257728459613694517832812936745357824196473298561581673429269145378';
const invalidCharPuzzle = validPuzzle.slice(0, 80) + 'X'; // 81 chars, last char invalid
const shortPuzzle = validPuzzle.slice(0, 80); // 80 chars
const unsolvablePuzzle = '9'.repeat(81); // 81 chars, unsolvable

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
    // Place '3' at A2 (should be valid)
    assert.isTrue(solver.checkRowPlacement(validPuzzle, 'A', '2', '3'));
  });

  test('Logic handles an invalid row placement', () => {
    // Place '6' at A2 (should conflict with row)
    assert.isFalse(solver.checkRowPlacement(validPuzzle, 'A', '2', '6'));
  });

  test('Logic handles a valid column placement', () => {
    // Place '3' at A2 (should be valid)
    assert.isTrue(solver.checkColPlacement(validPuzzle, 'A', '2', '3'));
  });

  test('Logic handles an invalid column placement', () => {
    // Place '2' at A2 (should conflict with column)
    assert.isFalse(solver.checkColPlacement(validPuzzle, 'A', '2', '2'));
  });

  test('Logic handles a valid region (3x3 grid) placement', () => {
    // Place '3' at A2 (should be valid)
    assert.isTrue(solver.checkRegionPlacement(validPuzzle, 'A', '2', '3'));
  });

  test('Logic handles an invalid region (3x3 grid) placement', () => {
    // Place '8' at A2 (should conflict with region)
    assert.isFalse(solver.checkRegionPlacement(validPuzzle, 'A', '2', '8'));
  });

  test('Valid puzzle strings pass the solver', () => {
    assert.equal(solver.solve(validPuzzle), validSolution);
  });

  test('Invalid puzzle strings fail the solver', () => {
    assert.isFalse(solver.solve(unsolvablePuzzle));
  });

  test('Solver returns the expected solution for an incomplete puzzle', () => {
    assert.equal(solver.solve(validPuzzle), validSolution);
  });
});
