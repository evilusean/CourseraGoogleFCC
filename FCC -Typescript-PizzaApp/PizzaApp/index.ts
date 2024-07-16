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

let cashInRegister = 100
let orderQeue: Order[] = []
let nextOrderId = 1;
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]


/*
Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu
*/

 function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = { 
        id: nextPizzaId++,
        ...pizza
    }
    menu.push(newPizza);
    return newPizza
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 *  1: finds that pizza object in the menu,
 *  2: adds the income to the cash register
 * 3: pushes a new "order object" to the orderQeue EG:
 * {pizza: selectedPizzaObject, status: "ordered"}
 * 4: returns the new order object
 *  */

function placeOrder(pizzaName: string): Order | undefined | null {
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
function completeOrder(orderId: number): Order | undefined | null {
    const order = orderQeue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} not found in the order queue`)
        return null;
    }
    order.status = "completed";
    return order;
}

/*
Challenge : Create a new utility function called getPizzaDetail. it will take a parameter called 'indentifir',
but theres a twistL we want this identifier to be allowed to either be the string name of the pizza (e.g. "Pepperoni")
OR to be the number ID of the pizza 
*/
export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Identifier must be a string or number");
    }
}


addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicey Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
// console.log("Cash in Register", cashInRegister)
// console.log("Order Queue", orderQeue)















