
/*
TEST APPEARS TO BE BUGGED:
https://github.com/freeCodeCamp/freeCodeCamp/issues/52688
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