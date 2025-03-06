let price = 19.5; // Example price
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const currencyUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
];

const checkCashRegister = (price, cash, cid) => {
    let change = cash - price;
    let cashInDrawer = cid.reduce((sum, item) => sum + item[1], 0);
    let output = { status: "", change: [] };

    if (cashInDrawer < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    } else if (cashInDrawer === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    let changeArr = [];
    for (let i = 0; i < currencyUnits.length; i++) {
        let coinName = currencyUnits[i][0];
        let coinValue = currencyUnits[i][1];
        let coinAvailable = cid[i][1];

        let coinToReturn = 0;
        while (change >= coinValue && coinAvailable > 0) {
            change -= coinValue;
            coinAvailable -= coinValue;
            coinToReturn += coinValue;
            change = Math.round(change * 100) / 100; // Round to avoid floating point issues
        }

        if (coinToReturn > 0) {
            changeArr.push([coinName, coinToReturn]);
        }
    }

    if (change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        output.change = [];
    } else {
        output.status = "OPEN";
        output.change = changeArr;
    }

    return output;
};

purchaseBtn.addEventListener('click', () => {
    const cash = Number(cashInput.value);
    if (cash < price) {
        alert('Customer does not have enough money to purchase the item');
    } else if (cash === price) {
        changeDue.innerText = 'No change due - customer paid with exact cash';
    } else {
        const result = checkCashRegister(price, cash, cid);
        changeDue.innerText = `Status: ${result.status} ${result.change.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(', ')}`;
    }
    cashInput.value = ''; // Clear the input field
});