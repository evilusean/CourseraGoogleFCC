const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver;

suite('UnitTests', () => {
  suiteSetup(done => {
    solver = new Solver();
    done();
  });

  suite('Function validate()', () => {
    test('Valid Characters, length of 81', (done) => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      assert.isTrue(solver.isValidPuzzleString(input),
        'input string is not a valid puzzle string');
      done();
    });

    test('Invalid characters (anything other than "1-9" or "."") are not accepted', (done) => {
      const input = '..X..5.1.85.4....2432.HI...1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      assert.isFalse(solver.isValidCharacters(input),
        'input string is composed of valid characters');
      done();
    });

    test('Shows an error for puzzles that are not 81 numbers long', done => {
      const shortStr = '83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const longStr = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...';
      assert.isFalse(
        solver.isValidLength(shortStr, 'input string is 81 characters'));
      assert.isFalse(
        solver.isValidLength(longStr, 'input string is 81 characters'));
      done();
    });
  });

  suite('Function checkRowPlacement()', () => {
    test('Valid placement for a row', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 0;
      const col = 0;
      const value = 3;
      solver.setBoardFromString(input);
      assert.isTrue(solver.isValidRowPlacement(row, col, value),
        'Invalid row placement');
      done();
    });

    test('Invalid placement for a row', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 0;
      const col = 0;
      const value = 9;
      solver.setBoardFromString(input);
      assert.isFalse(solver.isValidRowPlacement(row, col, value),
        'Valid row placement for value');
      done();
    });

  });

  suite('Function checkColPlacement()', () => {
    test('Valid placement for a column', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 0;
      const col = 0;
      const value = 3;
      solver.setBoardFromString(input);
      assert.isTrue(solver.isValidColumnPlacement(row, col, value),
        'Invalid column placement');
      done();
    });

    test('Invalid placement for a column', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 0;
      const col = 0;
      const value = 1;
      solver.setBoardFromString(input);
      assert.isFalse(solver.isValidColumnPlacement(row, col, value),
        'Valid column placement for value');
      done();
    });

  });

  suite('Function checkRegionPlacement()', () => {
    test('Valid placement for a region', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 4;
      const col = 4;
      const value = 3;
      solver.setBoardFromString(input);
      assert.isTrue(solver.isValidRegionPlacement(row, col, value),
        'Invalid region placement');
      done();
    });

    test('Invalid placement for a region', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const row = 4;
      const col = 4;
      const value = 7;
      solver.setBoardFromString(input);
      assert.isFalse(solver.isValidRegionPlacement(row, col, value),
        'Valid region placement');
      done();
    });

  });

  suite('Function solvePuzzle()', () => {
    test('Valid puzzles pass', done => {
      const input = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
      const answer = input
      solver.setBoardFromString(input);
      assert.strictEqual(solver.solve(), answer, 'Answer not equal to expected answer');
      done();
    });

    test('Invalid puzzles fail', done => {
      const input = '779235418851496372432178956174569283395842761628713549283657194516924837947381625';
      const error = 'invalid board'
      solver.setBoardFromString(input);
      assert.strictEqual(solver.solve(), error, 'Expected invalid board');
      done();
    });

    test('Returns the expected solution for an incomplete puzzle', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const answer = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
      solver.setBoardFromString(input);
      assert.strictEqual(solver.solve(), answer, 'Answer not equal to expected answer')
      done();
    });
  });
});
