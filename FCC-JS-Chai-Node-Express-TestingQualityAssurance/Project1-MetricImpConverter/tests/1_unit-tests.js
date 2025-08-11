const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  test('convertHandler should correctly read a whole number input', function() {
    const input = '32L';
    const expected = 32;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly read a decimal number input', function() {
    const input = '32.5L';
    const expected = 32.5;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly read a fractional input', function() {
    const input = '1/2L';
    const expected = 0.5;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly read a fractional input with a decimal', function() {
    const input = '1.5/2L';
    const expected = 0.75;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function() {
    const input = '3/2/3L';
    const expected = null;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function() {
    const input = 'L';
    const expected = 1;
    assert.equal(convertHandler.getNum(input), expected);
  });
  
  test('convertHandler should correctly read each valid input unit', function() {
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    validUnits.forEach(unit => {
      const input = `1${unit}`;
      assert.equal(convertHandler.getUnit(input), unit);
    });
  });
  
  test('convertHandler should correctly return an error for an invalid input unit', function() {
    const input = '32g';
    const expected = null;
    assert.equal(convertHandler.getUnit(input), expected);
  });
  
  test('convertHandler should return the correct return unit for each valid input unit', function() {
    const unitMap = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    
    Object.keys(unitMap).forEach(inputUnit => {
      const expected = unitMap[inputUnit];
      assert.equal(convertHandler.getReturnUnit(inputUnit), expected);
    });
  });
  
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function() {
    const spellMap = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    
    Object.keys(spellMap).forEach(unit => {
      const expected = spellMap[unit];
      assert.equal(convertHandler.spellOutUnit(unit), expected);
    });
  });
  
  test('convertHandler should correctly convert gal to L', function() {
    const input = [5, 'gal'];
    const expected = 18.92705;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
  test('convertHandler should correctly convert L to gal', function() {
    const input = [5, 'l'];
    const expected = 1.32086;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
  test('convertHandler should correctly convert mi to km', function() {
    const input = [5, 'mi'];
    const expected = 8.04670;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
  test('convertHandler should correctly convert km to mi', function() {
    const input = [5, 'km'];
    const expected = 3.10686;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
  test('convertHandler should correctly convert lbs to kg', function() {
    const input = [5, 'lbs'];
    const expected = 2.26796;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
  test('convertHandler should correctly convert kg to lbs', function() {
    const input = [5, 'kg'];
    const expected = 11.02312;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
  });
  
});