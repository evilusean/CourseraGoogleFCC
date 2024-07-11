const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQeue = []

/*
Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu
*/

 function addNewPizza(pizza) {
    menu.push(pizza);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 *  1: finds that pizza object in the menu,
 *  2: adds the income to the cash register
 * 3: pushes a new "order object" to the orderQeue EG:
 * {pizza: selectedPizzaObject, status: "ordered"}
 * 4: returns the new order object
 *  */

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (selectedPizza) {
        cashInRegister += selectedPizza.price;
        const newOrder = { pizza: selectedPizza, status: "ordered" };
        orderQeue.push(newOrder);
        return newOrder;
    } else {
        return null;
    }
}