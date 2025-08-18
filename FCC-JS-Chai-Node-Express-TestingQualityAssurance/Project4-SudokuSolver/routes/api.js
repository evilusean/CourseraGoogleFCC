'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/solve')
    .post((req, res) => {
      const { puzzle } = req.body;
      if (!puzzle) return res.json({ error: 'Required field missing' });

      const valid = solver.validate(puzzle);
      if (valid !== true) return res.json({ error: valid });

      const solution = solver.solve(puzzle);
      if (!solution) return res.json({ error: 'Puzzle cannot be solved' });

      res.json({ solution });
    });

  app.route('/api/check')
    .post((req, res) => {
      const { puzzle, coordinate, value } = req.body;
      if (!puzzle || !coordinate || !value) return res.json({ error: 'Required field(s) missing' });

      const valid = solver.validate(puzzle);
      if (valid !== true) return res.json({ error: valid });

      // Validate coordinate
      if (!/^[A-I][1-9]$/.test(coordinate)) return res.json({ error: 'Invalid coordinate' });

      // Validate value
      if (!/^[1-9]$/.test(value)) return res.json({ error: 'Invalid value' });

      const row = coordinate[0];
      const col = coordinate[1];
      let conflicts = [];

      if (!solver.checkRowPlacement(puzzle, row, col, value)) conflicts.push('row');
      if (!solver.checkColPlacement(puzzle, row, col, value)) conflicts.push('column');
      if (!solver.checkRegionPlacement(puzzle, row, col, value)) conflicts.push('region');

      if (conflicts.length === 0) {
        res.json({ valid: true });
      } else {
        res.json({ valid: false, conflict: conflicts });
      }
    });
};
