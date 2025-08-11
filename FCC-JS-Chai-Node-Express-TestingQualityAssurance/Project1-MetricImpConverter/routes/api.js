'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input;
      
      if (!input) {
        return res.json({ error: 'No input provided' });
      }
      
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      
      // Check for both invalid number and unit
      if (initNum === null && initUnit === null) {
        return res.json({ error: 'invalid number and unit' });
      }
      
      // Check for invalid number
      if (initNum === null) {
        return res.json({ error: 'invalid number' });
      }
      
      // Check for invalid unit
      if (initUnit === null) {
        return res.json({ error: 'invalid unit' });
      }
      
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      // Handle unit case requirements: return liter as 'L', others as lowercase
      const formattedInitUnit = initUnit === 'l' ? 'L' : initUnit;
      const formattedReturnUnit = returnUnit === 'l' ? 'L' : returnUnit;
      
      res.json({
        initNum: initNum,
        initUnit: formattedInitUnit,
        returnNum: returnNum,
        returnUnit: formattedReturnUnit,
        string: string
      });
    });

};
