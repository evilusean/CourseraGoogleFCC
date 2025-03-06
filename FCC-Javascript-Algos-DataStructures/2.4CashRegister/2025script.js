let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

function checkCashRegister(price, cash, cid) {
    // Convert to cents to avoid floating point issues
    const priceInCents = Math.round(price * 100);
    const cashInCents = Math.round(cash * 100);
    let changeDueInCents = cashInCents - priceInCents;
    
    // Calculate total cash in drawer in cents
    const totalCIDInCents = cid.reduce((sum, [_, amount]) => sum + Math.round(amount * 100), 0);
    
    // Create a copy of cid with amounts in cents
    const cidInCents = cid.map(([name, amount]) => [name, Math.round(amount * 100)]);
    
    // Define denominations in cents
    const denominations = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    };
    
    // Check if insufficient funds
    if (totalCIDInCents < changeDueInCents) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // Check if exact change
    if (totalCIDInCents === changeDueInCents) {
        return { status: "CLOSED", change: cid };
    }
    
    // Calculate change
    const change = [];
    const denominationNames = Object.keys(denominations).reverse();
    
    for (let i = 0; i < denominationNames.length; i++) {
        const denominationName = denominationNames[i];
        const denominationValue = denominations[denominationName];
        const availableAmount = cidInCents.find(item => item[0] === denominationName)[1];
        
        let amountToReturn = 0;
        
        while (changeDueInCents >= denominationValue && availableAmount > amountToReturn) {
            changeDueInCents -= denominationValue;
            amountToReturn += denominationValue;
        }
        
        if (amountToReturn > 0) {
            change.push([denominationName, amountToReturn / 100]);
        }
    }
    
    // Check if we could give exact change
    if (changeDueInCents > 0) {
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
            // For CLOSED status, include all denominations in original order
            for (let i = 0; i < result.change.length; i++) {
                outputText += ` ${result.change[i][0]}: $${result.change[i][1]}`;
            }
        } else if (result.change.length > 0) {
            // For OPEN status, include only denominations used in change
            for (let i = 0; i < result.change.length; i++) {
                outputText += ` ${result.change[i][0]}: $${result.change[i][1]}`;
            }
        }
        
        changeDue.innerText = outputText;
    }
    
    cashInput.value = ''; // Clear the input field
});