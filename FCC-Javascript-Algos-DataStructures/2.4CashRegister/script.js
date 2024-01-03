
function checkCashRegister(price, cash, cid) {
    const cidCopy = cid.map((x) => x);
    let output = {status: "", change: []};
    let change = cash - price;
    let deltaChange;
    let unit;
    let unitCheck = 8;
    let numOfUnit;
    let numOfChangeForUnit;
    let cashInDrawerLeft = cidCopy.reduce((sum, item) => sum + item[1], 0);
  
    let numOfPenny = cid.filter((item) => {
      return item[0] === "PENNY";
    })[0][1]/0.01;
    let numOfNickel = cid.filter((item) => {
      return item[0] === "NICKEL";
    })[0][1]/0.05;
    let numOfDime = cid.filter((item) => {
      return item[0] === "DIME";
    })[0][1]/0.1;
    let numOfQuarter = cid.filter((item) => {
      return item[0] === "QUARTER";
    })[0][1]/0.25;
    let numOfOne = cid.filter((item) => {
      return item[0] === "ONE";
    })[0][1];
    let numOfFive = cid.filter((item) => {
      return item[0] === "FIVE";
    })[0][1]/5;
    let numOfTen = cid.filter((item) => {
      return item[0] === "TEN";
    })[0][1]/10;
    let numOfTwenty = cid.filter((item) => {
      return item[0] === "TWENTY";
    })[0][1]/20;
    let numOfOneHundred = cid.filter((item) => {
      return item[0] === "ONE HUNDRED";
    })[0][1]/100;
  
    while (change > 0 && unitCheck >= 0 && cashInDrawerLeft > 0){
      unit = undefined;
  
      if (change >= 100 && unitCheck === 8){
        deltaChange = 100;
        unit = "ONE HUNDRED";
        numOfUnit = numOfOneHundred;
      }
  
      else if (change >= 20 && unitCheck === 7){
        deltaChange = 20;
        unit = "TWENTY";
        numOfUnit = numOfTwenty;
      }
  
      else if (change >= 10 && unitCheck === 6){
        deltaChange = 10;
        unit = "TEN";
        numOfUnit = numOfTen;
      }
  
      else if (change >= 5 && unitCheck === 5){
        deltaChange = 5;
        unit = "FIVE";
        numOfUnit = numOfFive;
      }
  
      else if (change >= 1 && unitCheck === 4){
        deltaChange = 1;
        unit = "ONE";
        numOfUnit = numOfOne;
      }
  
      else if (change >= 0.25 && unitCheck === 3){
        deltaChange = 0.25;
        unit = "QUARTER";
        numOfUnit = numOfQuarter;
      }
  
      else if (change >= 0.1 && unitCheck === 2){
        deltaChange = 0.1;
        unit = "DIME";
        numOfUnit = numOfDime;
      }
  
      else if (change >= 0.05 && unitCheck === 1){
        deltaChange = 0.05;
        unit = "NICKEL";
        numOfUnit = numOfNickel;
      }
  
      else if (change >= 0.01 && unitCheck === 0){
        deltaChange = 0.01;
        unit = "PENNY";
        numOfUnit = numOfPenny;
      }
  
      numOfChangeForUnit = numOfUnit;
  
      if (numOfChangeForUnit <= 0){
        unit = undefined;
      }
  
      if (unit != undefined){
        for (let i = 1; i <= numOfUnit; i++){
          if (change - (deltaChange * i) < deltaChange){
            numOfChangeForUnit = i;
            break;
          }
        }
  
        change -= (deltaChange * numOfChangeForUnit);
        cidCopy[unitCheck][1] -= (deltaChange * numOfChangeForUnit);
        change = change.toFixed(2);
        output.change.push([unit, numOfChangeForUnit * deltaChange]);
        cashInDrawerLeft = cidCopy.reduce((sum, item) => sum + item[1], 0);
      }
  
      unitCheck -= 1;
    }
  
    if (change > 0){
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
    }
  
    else if (change == 0){
      if (cashInDrawerLeft == 0){
        output.status = "CLOSED";
              
        for (let i = 0; i < cidCopy.length; i++){
          let outputChangeUnits = output.change.map((item) => {
            return item[0];
          })
          let cidCopyNew = cidCopy.filter((item) => {
            return !outputChangeUnits.includes(item[0]);
          }) 
  
          for (let i = 0; i < cidCopyNew.length; i++){
            output.change.push(cidCopyNew[i]);
          }
        }
      }
    
      else{
        output.status = "OPEN";
      }
    }
  
    return output;
  }

/*
  const form = document.selectelementedbyID('submit');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const price = Number(document.querySelector('#price').value);
    const cash = Number(document.querySelector('#cash').value);
    const drawer = Number(document.querySelector('#drawer').value);
  
    const change = cash - price;
  
    if (change < 0) {
      document.querySelector('#change-due').innerHTML = 'Customer does not have enough money to purchase the item';
    } else if (change > drawer) {
      document.querySelector('#change-due').innerHTML = 'The cash drawer does not have enough cash.';
    } else if (change = drawer) {
        document.querySelector('#change-due').innerHTML = 'No change due - customer paid with exact cash';
      }
    else {
      const changeInDollars = change / 100;
      const changeInCoins = [
        {
          name: 'ONE HUNDRED',
          value: 100
        },
        {
          name: 'TWENTY',
          value: 20
        },
        {
          name: 'TEN',
          value: 10
        },
        {
          name: 'FIVE',
          value: 5
        },
        {
          name: 'ONE',
          value: 1
        },
        {
          name: 'QUARTER',
          value: 0.25
        },
        {
          name: 'DIME',
          value: 0.1
        },
        {
          name: 'NICKEL',
          value: 0.05
        },
        {
          name: 'PENNY',
          value: 0.01
        }
      ];
  
      const changeCoins = [];
  
      for (let i = 0; i < changeInCoins.length; i++) {
        const coin = changeInCoins[i];
  
        while (changeInDollars >= coin.value) {
          changeInDollars -= coin.value;
          changeCoins.push(coin.name);
        }
      }
  
      document.querySelector('#result').innerHTML = `Your change is $${changeInDollars}. Here are your coins: ${changeCoins.join(', ')}`;
    }
  });
  */

  /*
let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
const cashInput = document.getElementById('cash')
const changeDue = document.getElementById('change-due')
const purchaseBtn = document.getElementById('purchase-btn')

function sumCid(cid) {
  return Number.parseFloat(cid.reduce((sum, el) => {
    return sum = sum + el[1]
  },0).toFixed(2))
}

function giveCash(change, cid) {
  const dict = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  if (change == 0) {
    return []
  }
  if (sumCid(cid)<change) {
    return [0]
    }
  let nominal = dict[cid[cid.length-1][0]]
  let nominalName = cid[cid.length-1][0]
  let amount = cid[cid.length-1][1]
  let changeIn = 0
  if (change >= nominal && amount > 0) {
    cid = cid.slice(0, cid.length-1)
    do {
      changeIn = Number.parseFloat((changeIn + nominal).toFixed(2))
    } while ((changeIn+nominal) <= change && (changeIn+nominal) <= amount)
    change = Number.parseFloat((change - changeIn).toFixed(2))
    return [...giveCash(change, cid), [nominalName, changeIn]]
  } else if (amount == 0) {
    cid = cid.slice(0, cid.length-1)
    return [...giveCash(change, cid), [nominalName, amount]]
  } else {
    cid = cid.slice(0, cid.length-1)
    return [...giveCash(change, cid)]
  }
}

function checkCashRegister(price, cash, cid) {
  let cashInDrawer = sumCid(cid)
  let change = giveCash((cash-price), cid)
  if (cashInDrawer < (cash - price)) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if (change[0] === 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if ((cashInDrawer - sumCid(change)) == 0) {
    return {status: "CLOSED", change: change}
  } else {
    return {status: "OPEN", change: change.reverse()}
  }
}

function msgOutput(obj) {
  if (obj.status == 'CLOSED') {
    obj.change = obj.change.reverse().slice(5)
    console.log(obj) 
  } 
  changeDue.innerText = 'Status: ' + obj.status + ' ' + obj.change.join(' ').replace(/,/g, ': $')
}

purchaseBtn.addEventListener('click', () => {
  if (cashInput.value>price) {
    msgOutput(checkCashRegister(price, cashInput.value, cid));
  } else if (cashInput.value == price) {
    changeDue.innerText = 'No change due - customer paid with exact cash'
  } else {
    alert('Customer does not have enough money to purchase the item')
  }
  cashInput.value = '';
});
*/