const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
  // Test project name
  const projectName = 'apitest';
  
  // Test data
  const testIssue = {
    issue_title: 'Test Issue',
    issue_text: 'This is a test issue',
    created_by: 'Test User',
    assigned_to: 'Test Assignee',
    status_text: 'Open'
  };
  
  let issueId;
  
  test('Create an issue with every field: POST request to /api/issues/{project}', function(done) {
    chai.request(server)
      .post(`/api/issues/${projectName}`)
      .send(testIssue)
      .end(function(err, res) {
        if (err) {
          console.log('Error in test 1:', err);
          done(err);
          return;
        }
        
        console.log('Test 1 response:', res.body);
        
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'issue_title');
        assert.property(res.body, 'issue_text');
        assert.property(res.body, 'created_by');
        assert.property(res.body, 'assigned_to');
        assert.property(res.body, 'status_text');
        assert.property(res.body, 'created_on');
        assert.property(res.body, 'updated_on');
        assert.property(res.body, 'open');
        assert.property(res.body, 'project');
        
        assert.equal(res.body.issue_title, testIssue.issue_title);
        assert.equal(res.body.issue_text, testIssue.issue_text);
        assert.equal(res.body.created_by, testIssue.created_by);
        assert.equal(res.body.assigned_to, testIssue.assigned_to);
        assert.equal(res.body.status_text, testIssue.status_text);
        assert.equal(res.body.open, true);
        assert.equal(res.body.project, projectName);
        
        issueId = res.body._id;
        console.log('Issue ID set to:', issueId);
        done();
      });
  });
  
  test('Create an issue with only required fields: POST request to /api/issues/{project}', function(done) {
    const requiredOnlyIssue = {
      issue_title: 'Required Only Issue',
      issue_text: 'This issue has only required fields',
      created_by: 'Required User'
    };
    
    chai.request(server)
      .post(`/api/issues/${projectName}`)
      .send(requiredOnlyIssue)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'issue_title');
        assert.property(res.body, 'issue_text');
        assert.property(res.body, 'created_by');
        assert.property(res.body, 'assigned_to');
        assert.property(res.body, 'status_text');
        assert.property(res.body, 'created_on');
        assert.property(res.body, 'updated_on');
        assert.property(res.body, 'open');
        assert.property(res.body, 'project');
        
        assert.equal(res.body.issue_title, requiredOnlyIssue.issue_title);
        assert.equal(res.body.issue_text, requiredOnlyIssue.issue_text);
        assert.equal(res.body.created_by, requiredOnlyIssue.created_by);
        assert.equal(res.body.assigned_to, '');
        assert.equal(res.body.status_text, '');
        assert.equal(res.body.open, true);
        assert.equal(res.body.project, projectName);
        done();
      });
  });
  
  test('Create an issue with missing required fields: POST request to /api/issues/{project}', function(done) {
    const missingFieldsIssue = {
      issue_title: 'Missing Fields Issue'
      // Missing issue_text and created_by
    };
    
    chai.request(server)
      .post(`/api/issues/${projectName}`)
      .send(missingFieldsIssue)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'required field(s) missing');
        done();
      });
  });
  
  test('View issues on a project: GET request to /api/issues/{project}', function(done) {
    chai.request(server)
      .get(`/api/issues/${projectName}`)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.isAtLeast(res.body.length, 2); // At least our 2 test issues
        done();
      });
  });
  
  test('View issues on a project with one filter: GET request to /api/issues/{project}', function(done) {
    console.log('Running filter test with issueId:', issueId);
    
    chai.request(server)
      .get(`/api/issues/${projectName}`)
      .query({ issue_title: 'Test Issue' })
      .end(function(err, res) {
        if (err) {
          console.log('Error in filter test:', err);
          done(err);
          return;
        }
        
        console.log('Filter test response:', res.body);
        
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.equal(res.body.length, 1);
        assert.equal(res.body[0].issue_title, 'Test Issue');
        done();
      });
  });
  
  test('View issues on a project with multiple filters: GET request to /api/issues/{project}', function(done) {
    chai.request(server)
      .get(`/api/issues/${projectName}`)
      .query({ 
        issue_title: 'Test Issue',
        created_by: 'Test User'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.equal(res.body.length, 1);
        assert.equal(res.body[0].issue_title, 'Test Issue');
        assert.equal(res.body[0].created_by, 'Test User');
        done();
      });
  });
  
  test('Update one field on an issue: PUT request to /api/issues/{project}', function(done) {
    console.log('Running PUT test with issueId:', issueId);
    
    const updateData = {
      _id: issueId,
      issue_title: 'Updated Test Issue'
    };
    
    chai.request(server)
      .put(`/api/issues/${projectName}`)
      .send(updateData)
      .end(function(err, res) {
        if (err) {
          console.log('Error in PUT test:', err);
          done(err);
          return;
        }
        
        console.log('PUT test response:', res.body);
        
        assert.equal(res.status, 200);
        assert.property(res.body, 'result');
        assert.property(res.body, '_id');
        assert.equal(res.body.result, 'successfully updated');
        assert.equal(res.body._id, issueId);
        done();
      });
  });
  
  test('Update multiple fields on an issue: PUT request to /api/issues/{project}', function(done) {
    const updateData = {
      _id: issueId,
      issue_text: 'Updated issue text',
      status_text: 'In Progress'
    };
    
    chai.request(server)
      .put(`/api/issues/${projectName}`)
      .send(updateData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'result');
        assert.property(res.body, '_id');
        assert.equal(res.body.result, 'successfully updated');
        assert.equal(res.body._id, issueId);
        done();
      });
  });
  
  test('Update an issue with missing _id: PUT request to /api/issues/{project}', function(done) {
    const updateData = {
      issue_title: 'Missing ID Update'
    };
    
    chai.request(server)
      .put(`/api/issues/${projectName}`)
      .send(updateData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'missing _id');
        done();
      });
  });
  
  test('Update an issue with no fields to update: PUT request to /api/issues/{project}', function(done) {
    const updateData = {
      _id: issueId
    };
    
    chai.request(server)
      .put(`/api/issues/${projectName}`)
      .send(updateData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'no update field(s) sent');
        done();
      });
  });
  
  test('Update an issue with an invalid _id: PUT request to /api/issues/{project}', function(done) {
    const updateData = {
      _id: 99999,
      issue_title: 'Invalid ID Update'
    };
    
    chai.request(server)
      .put(`/api/issues/${projectName}`)
      .send(updateData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.property(res.body, '_id');
        assert.equal(res.body.error, 'could not update');
        assert.equal(res.body._id, 99999);
        done();
      });
  });
  
  test('Delete an issue: DELETE request to /api/issues/{project}', function(done) {
    console.log('Running DELETE test with issueId:', issueId);
    
    const deleteData = {
      _id: issueId
    };
    
    chai.request(server)
      .delete(`/api/issues/${projectName}`)
      .send(deleteData)
      .end(function(err, res) {
        if (err) {
          console.log('Error in DELETE test:', err);
          done(err);
          return;
        }
        
        console.log('DELETE test response:', res.body);
        
        assert.equal(res.status, 200);
        assert.property(res.body, 'result');
        assert.property(res.body, '_id');
        assert.equal(res.body.result, 'successfully deleted');
        assert.equal(res.body._id, issueId);
        done();
      });
  });
  
  test('Delete an issue with an invalid _id: DELETE request to /api/issues/{project}', function(done) {
    const deleteData = {
      _id: 99999
    };
    
    chai.request(server)
      .delete(`/api/issues/${projectName}`)
      .send(deleteData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.property(res.body, '_id');
        assert.equal(res.body.error, 'could not delete');
        assert.equal(res.body._id, 99999);
        done();
      });
  });
  
  test('Delete an issue with missing _id: DELETE request to /api/issues/{project}', function(done) {
    const deleteData = {};
    
    chai.request(server)
      .delete(`/api/issues/${projectName}`)
      .send(deleteData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'missing _id');
        done();
      });
  });
  
});
