const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const validPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9..5.....1.4.2.3.6.9.7..'; // 81 chars
const invalidCharPuzzle = validPuzzle.slice(0, 80) + 'X'; // 81 chars, last char invalid
const shortPuzzle = validPuzzle.slice(0, 80); // 80 chars
const unsolvablePuzzle = '9'.repeat(81); // 81 chars

suite('Functional Tests', () => {
  test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({ puzzle: validPuzzle })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'solution');
        done();
      });
  });

  test('Solve a puzzle with missing puzzle string: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Required field missing' });
        done();
      });
  });

  test('Solve a puzzle with invalid characters: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({ puzzle: invalidCharPuzzle })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Invalid characters in puzzle' });
        done();
      });
  });

  test('Solve a puzzle with incorrect length: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({ puzzle: shortPuzzle })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Expected puzzle to be 81 characters long' });
        done();
      });
  });

  test('Solve a puzzle that cannot be solved: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({ puzzle: unsolvablePuzzle })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Puzzle cannot be solved' });
        done();
      });
  });

  test('Check a puzzle placement with all fields: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A2', value: '3' }) // Use a value that is valid for A2
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'valid');
        done();
      });
  });

  test('Check a puzzle placement with single placement conflict: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A2', value: '6' }) // Use a value that creates a row conflict
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isFalse(res.body.valid);
        assert.isArray(res.body.conflict);
        assert.include(res.body.conflict, 'row');
        done();
      });
  });

  test('Check a puzzle placement with multiple placement conflicts: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A2', value: '2' }) // Use a value that creates row and column conflict
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isFalse(res.body.valid);
        assert.isArray(res.body.conflict);
        assert.include(res.body.conflict, 'row');
        assert.include(res.body.conflict, 'column');
        done();
      });
  });

  test('Check a puzzle placement with all placement conflicts: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A2', value: '8' }) // Use a value that creates row, column, and region conflict
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isFalse(res.body.valid);
        assert.isArray(res.body.conflict);
        assert.include(res.body.conflict, 'row');
        assert.include(res.body.conflict, 'column');
        assert.include(res.body.conflict, 'region');
        done();
      });
  });

  test('Check a puzzle placement with missing required fields: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A1' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      });
  });

  test('Check a puzzle placement with invalid characters: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: invalidCharPuzzle, coordinate: 'A1', value: '7' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Invalid characters in puzzle' });
        done();
      });
  });

  test('Check a puzzle placement with incorrect length: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: shortPuzzle, coordinate: 'A1', value: '7' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Expected puzzle to be 81 characters long' });
        done();
      });
  });

  test('Check a puzzle placement with invalid placement coordinate: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'Z1', value: '7' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Invalid coordinate' });
        done();
      });
  });

  test('Check a puzzle placement with invalid placement value: POST request to /api/check', function(done) {
    chai.request(server)
      .post('/api/check')
      .send({ puzzle: validPuzzle, coordinate: 'A1', value: 'X' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Invalid value' });
        done();
      });
  });
});

