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
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const number = document.getElementById('number').value;
    const output = document.getElementById('output');
  
    const romanNumeral = convertNumberToRoman(number);
  
    output.innerHTML = romanNumeral;
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