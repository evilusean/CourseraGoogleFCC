const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function(done) {
    chai.request(server)
      .post('/api/solve')
      .send({ puzzle: '1'.repeat(81) })
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

  // Add more tests for each FCC requirement...
});

