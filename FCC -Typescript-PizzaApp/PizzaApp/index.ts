type Pizza = {
    id: number, 
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let orderQeue: Order[] = []
let nextOrderId = 1;

/*
Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu
*/

 function addNewPizza(pizza: Pizza) {
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

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (selectedPizza) {
        cashInRegister += selectedPizza.price;
        const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
        orderQeue.push(newOrder);
        return newOrder;
    } else {
        return null;
    }
}

/*
Challenge: Write another utility function, completeORder, that takes an orderId as a parameter
finds the correct order in the orderQeue, and marks its status as "completed". for good measure, 
return the founder order from the function

Note: you'll need to ensure that we're adding the ID's to our orders when we create new orders. You can use a
global 'nextOrderId' variable and increment it every time a new order is created 
to simulate real IDs being managed for us by a database
*/
function completeOrder(orderId: number) {
    const order = orderQeue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} not found in the order queue`)
        return null;
    }
    order.status = "completed";
    return order;
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicey Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
console.log("Cash in Register", cashInRegister)
console.log("Order Queue", orderQeue)















