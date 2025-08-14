'use strict';

module.exports = function (app) {
  
  // Store issues in memory (in a real app, you'd use a database)
  let issues = [];
  let nextId = 1;

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      let query = req.query;
      
      // Filter issues by project
      let projectIssues = issues.filter(issue => issue.project === project);
      
      // Apply filters if provided
      if (Object.keys(query).length > 0) {
        projectIssues = projectIssues.filter(issue => {
          for (let key in query) {
            if (query[key] !== '' && query[key] !== undefined) {
              // Handle boolean conversion for 'open' field
              if (key === 'open') {
                let queryValue = query[key] === 'true';
                if (issue[key] !== queryValue) {
                  return false;
                }
              } else if (issue[key] != query[key]) {
                return false;
              }
            }
          }
          return true;
        });
      }
      
      res.json(projectIssues);
    })
    
    .post(function (req, res){
      let project = req.params.project;
      let { issue_title, issue_text, created_by, assigned_to, status_text } = req.body;
      
      // Validate required fields
      if (!issue_title || !issue_text || !created_by) {
        return res.json({ error: 'required field(s) missing' });
      }
      
      // Create new issue
      let newIssue = {
        _id: nextId++,
        issue_title,
        issue_text,
        created_by,
        assigned_to: assigned_to || '',
        status_text: status_text || '',
        created_on: new Date(),
        updated_on: new Date(),
        open: true,
        project
      };
      
      issues.push(newIssue);
      res.json(newIssue);
    })
    
    .put(function (req, res){
      let project = req.params.project;
      let { _id, ...updateFields } = req.body;
      
      // Validate _id is provided
      if (!_id) {
        return res.json({ error: 'missing _id' });
      }
      
      // Check if there are fields to update
      let hasUpdateFields = false;
      for (let key in updateFields) {
        if (updateFields[key] !== '' && updateFields[key] !== undefined) {
          hasUpdateFields = true;
          break;
        }
      }
      
      if (!hasUpdateFields) {
        return res.json({ error: 'no update field(s) sent' });
      }
      
      // Find the issue
      let issueIndex = issues.findIndex(issue => issue._id == _id && issue.project === project);
      
      if (issueIndex === -1) {
        return res.json({ error: 'could not update', '_id': _id });
      }
      
      // Update the issue
      let issue = issues[issueIndex];
      for (let key in updateFields) {
        if (updateFields[key] !== '' && updateFields[key] !== undefined) {
          issue[key] = updateFields[key];
        }
      }
      issue.updated_on = new Date();
      
      res.json({ result: 'successfully updated', '_id': _id });
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      let { _id } = req.body;
      
      // Validate _id is provided
      if (!_id) {
        return res.json({ error: 'missing _id' });
      }
      
      // Find and delete the issue
      let issueIndex = issues.findIndex(issue => issue._id == _id && issue.project === project);
      
      if (issueIndex === -1) {
        return res.json({ error: 'could not delete', '_id': _id });
      }
      
      issues.splice(issueIndex, 1);
      res.json({ result: 'successfully deleted', '_id': _id });
    });
    
};
