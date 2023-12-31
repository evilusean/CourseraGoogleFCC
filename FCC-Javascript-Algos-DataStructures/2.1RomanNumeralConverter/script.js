/* OLD SCRIPT:
function convertToRoman(num) {
    let remainingNum = num;
    let output = "";
    let strNum;
    let changeOutput;
    let changeRemainingNum;
    let tempNum;
    let numOfZeroes;
  
    while (remainingNum > 0){
      strNum = remainingNum.toString();
  
      if (remainingNum >= 1000){
        changeOutput = "M";
        changeRemainingNum = 1000;
      }
  
      else if (remainingNum >= 900){
        changeOutput = "CM";
        changeRemainingNum = 900;
      }
  
      else if (remainingNum >= 500){
        changeOutput = "D";
        changeRemainingNum = 500;
      }
  
      else if (remainingNum >= 400){
        changeOutput = "CD";
        changeRemainingNum = 400;
      }
  
      else if (remainingNum >= 100){
        changeOutput = "C";
        changeRemainingNum = 100;
      }
  
      else if (remainingNum >= 90){
        changeOutput = "XC";
        changeRemainingNum = 90;
      }
  
      else if (remainingNum >= 50){
        changeOutput = "L";
        changeRemainingNum = 50;
      }
  
      else if (remainingNum >= 40){
        changeOutput = "XL";
        changeRemainingNum = 40;
      }
  
      else if (remainingNum >= 10){
        changeOutput = "X";
        changeRemainingNum = 10;
      }
  
      else if (remainingNum >= 9){
        changeOutput = "IX";
        changeRemainingNum = 9;
      }
  
      else if (remainingNum >= 5){
        changeOutput = "V";
        changeRemainingNum = 5;
      }
  
      else if (remainingNum >= 4){
        changeOutput = "IV";
        changeRemainingNum = 4;
      }
  
      else if (remainingNum >= 1){
        changeOutput = "I";
        changeRemainingNum = 1;
      }
  
      tempNum = strNum[0];
      numOfZeroes = strNum.length - 1;
  
      for (let i = 0; i < numOfZeroes; i++){
        tempNum += "0";
      }
  
      tempNum = parseInt(tempNum);
  
      for (let i = tempNum; i >= changeRemainingNum ; i -= changeRemainingNum){
        output += changeOutput;
        remainingNum -= changeRemainingNum;
      }
    }
  
    return output;
  }
  */
 /* ATTEMPT 2:
  const form = document.querySelector('form');

  form.addEventListener('click', (event) => {
    event.preventDefault();
  
    const number = document.getElementById('number').value;
    const output = document.getElementById('output');
  
    if (number === '') {
      output.innerHTML = 'Please enter a valid number';
    } else if (number < 1) {
      output.innerHTML = 'Please enter a number greater than or equal to 1';
    } else if (number > 3999) {
      output.innerHTML = 'Please enter a number less than or equal to 3999';
    } else {
      const romanNumeral = convertNumberToRoman(number);
  
      output.innerHTML = romanNumeral;
    }
  });
  
  function convertNumberToRoman(number) {
    const romanNumerals = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
  
    let romanNumeral = '';
  
    for (let i = 1000; i >= 1; i /= 10) {
      const quotient = Math.floor(number / i);
      number %= i;
  
      romanNumeral += romanNumerals[quotient * i];
    }
  
    return romanNumeral;
  }
  */
  document.getElementById('convert-btn').addEventListener('click', () => {
    const inputNumber = parseInt(document.getElementById('number').value)
    if (isNaN(inputNumber) || inputNumber < 1) {
      document.getElementById('output').textContent = "Please enter a valid number"
    } else if (inputNumber < 1) {
      document.getElementById('output').textContent = "Please enter a number greater than or equal to 1"
    } else if (inputNumber >= 4000) {
      document.getElementById('output').textContent = "Please enter a number less than or equal to 3999"
    } else {
      const romanNumerals = convertToRoman(inputNumber);
          document.getElementById('output').textContent = romanNumerals;
    }
  });
  
  function convertToRoman (num) {
     let romanNumeral = '';
     const romanNumeralMapping = [
          { value: 1000, numeral: 'M' },
          { value: 900, numeral: 'CM' },
          { value: 500, numeral: 'D' },
          { value: 400, numeral: 'CD' },
          { value: 100, numeral: 'C' },
          { value: 90, numeral: 'XC' },
          { value: 50, numeral: 'L' },
          { value: 40, numeral: 'XL' },
          { value: 10, numeral: 'X' },
          { value: 9, numeral: 'IX' },
          { value: 5, numeral: 'V' },
          { value: 4, numeral: 'IV' },
          { value: 1, numeral: 'I' }
     ];
     for(let i=0; i < romanNumeralMapping.length; i++) {
       while (num >= romanNumeralMapping[i].value) {
        romanNumeral += romanNumeralMapping[i].numeral;
        num -= romanNumeralMapping[i].value;
       }
    }
    return romanNumeral;
  }