function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    // Extract the number part from the input
    const numMatch = input.match(/^[\d./]+/);
    
    if (!numMatch) {
      return 1; // Default to 1 if no number provided
    }
    
    const numStr = numMatch[0];
    
    // Check for double fractions (e.g., 3/2/3)
    if ((numStr.match(/\//g) || []).length > 1) {
      return null; // Error for double fractions
    }
    
    // Handle fractions
    if (numStr.includes('/')) {
      const [numerator, denominator] = numStr.split('/');
      result = parseFloat(numerator) / parseFloat(denominator);
    } else {
      result = parseFloat(numStr);
    }
    
    return isNaN(result) ? null : result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    // Extract the unit part from the input
    const unitMatch = input.match(/[a-zA-Z]+$/);
    
    if (!unitMatch) {
      return null; // Error if no unit found
    }
    
    const unit = unitMatch[0].toLowerCase();
    
    // Check if unit is valid
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    if (!validUnits.includes(unit)) {
      return null; // Error for invalid unit
    }
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    const unitMap = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    
    result = unitMap[initUnit.toLowerCase()];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    const spellMap = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    
    result = spellMap[unit.toLowerCase()];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    const unit = initUnit.toLowerCase();
    
    switch (unit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = null;
    }
    
    return Math.round(result * 100000) / 100000; // Round to 5 decimal places
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    const initUnitSpelled = this.spellOutUnit(initUnit);
    const returnUnitSpelled = this.spellOutUnit(returnUnit);
    
    result = `${initNum} ${initUnitSpelled} converts to ${returnNum} ${returnUnitSpelled}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
