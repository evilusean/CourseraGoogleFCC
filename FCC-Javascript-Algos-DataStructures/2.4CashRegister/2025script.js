let price = 19.5; // Example price
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
const cashInput = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener('click', () => {
    const cash = Number(cashInput.value); // Get the cash input value
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