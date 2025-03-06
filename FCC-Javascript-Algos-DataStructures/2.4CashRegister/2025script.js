let price = 19.5; // Example price
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;
    let totalCID = 0;
    
    // Calculate total cash in drawer
    for (let i = 0; i < cid.length; i++) {
        totalCID += cid[i][1];
    }
    totalCID = Math.round(totalCID * 100) / 100;
    
    // Check if exact change
    if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    }
    
    // Check if insufficient funds
    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // Calculate change
    let change = [];
    const reversedCID = [...cid].reverse();
    
    for (let i = 0; i < reversedCID.length; i++) {
        const coinName = reversedCID[i][0];
        const coinValue = currencyUnit[coinName];
        const coinTotal = reversedCID[i][1];
        let coinAmount = 0;
        
        while (changeDue >= coinValue && coinTotal > coinAmount) {
            changeDue -= coinValue;
            changeDue = Math.round(changeDue * 100) / 100;
            coinAmount += coinValue;
        }
        
        if (coinAmount > 0) {
            change.push([coinName, coinAmount]);
        }
    }
    
    // Check if we could give exact change
    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    return { status: "OPEN", change: change };
}

purchaseBtn.addEventListener('click', () => {
    const cash = Number(cashInput.value);
    
    if (cash < price) {
        alert('Customer does not have enough money to purchase the item');
    } else if (cash === price) {
        changeDue.innerText = 'No change due - customer paid with exact cash';
    } else {
        const result = checkCashRegister(price, cash, cid);
        
        // Format the output
        let outputText = `Status: ${result.status}`;
        
        if (result.status === "CLOSED") {
            // For CLOSED status, we need to include all denominations
            for (let i = 0; i < result.change.length; i++) {
                outputText += ` ${result.change[i][0]}: $${result.change[i][1]}`;
            }
        } else if (result.change.length > 0) {
            for (let i = 0; i < result.change.length; i++) {
                outputText += ` ${result.change[i][0]}: $${result.change[i][1]}`;
            }
        }
        
        changeDue.innerText = outputText;
    }
    
    cashInput.value = ''; // Clear the input field
});