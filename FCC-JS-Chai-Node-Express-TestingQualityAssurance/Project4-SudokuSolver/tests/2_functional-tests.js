const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  suite('POST to /api/solve', () => {
    test('Solvable puzzle posted returns completed puzzle', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const output = '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
      chai.request(server)
        .post(`/api/solve`)
        .send({ puzzle: input })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'solution', 'No solution property in response');
          assert.strictEqual(res.body.solution, output, 'Output not equal to expected output');
          done();
        });
    });

    test('Puzzle Field Missing', done => {
      const error = { error: 'Required field missing' };
      chai.request(server)
        .post(`/api/solve`)
        .send({ puzzle: '' })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Invalid Characters in Puzzle', done => {
      const input = '..A..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const error = { error: 'Invalid characters in puzzle' };
      chai.request(server)
        .post(`/api/solve`)
        .send({ puzzle: input })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Puzzle incorrect length', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.';
      const error = { error: 'Expected puzzle to be 81 characters long' };
      chai.request(server)
        .post(`/api/solve`)
        .send({ puzzle: input })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Puzzle Cannot be Solved', done => {
      const input = '779235418851496372432178956174569283395842761628713549283657194516924837947381625';
      const error = { error: 'Puzzle cannot be solved' };
      chai.request(server)
        .post(`/api/solve`)
        .send({ puzzle: input })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });
  });

  suite('POST to /api/check', () => {
    test('All fields filled in correctly, valid placement', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '7';
      const status = { valid: true };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'valid', 'No valid property in response');
          assert.notProperty(res.body, 'conflict', 'conflict property in response');
          assert.deepEqual(res.body, status, 'status not equal to expected status');
          done();
        });
    });

    test('All fields filled in correctly, invalid placement, single conflict', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A2';
      const value = '1';
      const status = { valid: false, conflict: ['row'] };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'valid', 'No valid property in response');
          assert.property(res.body, 'conflict', 'conflict property not in response');
          assert.deepEqual(res.body, status, 'status not equal to expected status');
          done();
        });
    });

    test('All fields filled in correctly, invalid placement, multiple conflict', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const status = { valid: false, conflict: ['row', 'column'] };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'valid', 'No valid property in response');
          assert.property(res.body, 'conflict', 'conflict property not in response');
          assert.deepEqual(res.body, status, 'status not equal to expected status');
          done();
        });
    });

    test('All fields filled in correctly, invalid placement, all conflict', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '5';
      const status = { valid: false, conflict: ['row', 'column', 'region'] };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'valid', 'No valid property in response');
          assert.property(res.body, 'conflict', 'conflict property not in response');
          assert.deepEqual(res.body, status, 'status not equal to expected status');
          done();
        });
    });

    test('Required Field(s) Missing', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '';
      const error = { error: 'Required field(s) missing' };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value: '' })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Invalid Characters in Puzzle', done => {
      const input = '..9..ab1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '1';
      const error = { error: 'Invalid characters in puzzle' };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Puzzle incorrect length', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6........';
      const coordinate = 'A1';
      const value = '1';
      const error = { error: 'Expected puzzle to be 81 characters long' };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });

    test('Coordinate Out of Bounds', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate1 = 'K1';
      const coordinate2 = 'A11';
      const value = '1';
      const error = { error: 'Invalid coordinate' };
      const requester = chai.request(server).keepOpen();
      let assertError = null;
      Promise.all([
        requester.post(`/api/check`).send({ puzzle: input, coordinate: coordinate1, value }),
        requester.post(`/api/check`).send({ puzzle: input, coordinate: coordinate2, value }),
      ])
        .then((responses) => {
          try {
            responses.forEach(res => {
              assert.equal(res.status, 200);
              assert.property(res.body, 'error', 'No error property in response');
              assert.deepEqual(res.body, error, 'error not equal to expected error');
            });
          } catch (err) {
            assertError = err;
          }
        })
        .then(() => requester.close())
        .then(() => done(assertError));
    });

    test('Invalid Value', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const coordinate = 'A1';
      const value = '.';
      const error = { error: 'Invalid value' };
      chai.request(server)
        .post(`/api/check`)
        .send({ puzzle: input, coordinate, value })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error', 'No error property in response');
          assert.deepEqual(res.body, error, 'error not equal to expected error');
          done();
        });
    });
  });
});

