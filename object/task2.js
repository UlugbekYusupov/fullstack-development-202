const cart = [
    { id: 1, name: "Laptop", price: 900, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 2 },
    { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];


let totalPrice = 0;
let expensiveItem = {price: 0,quantity:0};

for(let i of cart) {
    let itemPrice =(i.price*i.quantity);
    totalPrice += itemPrice;
    let expensiveItemPrice = expensiveItem.price*expensiveItem.quantity;
    if(itemPrice>expensiveItemPrice) {
        expensiveItem = i;
    }
}

if(totalPrice>100) totalPrice -= totalPrice*0.1;



console.log(totalPrice);
console.log(expensiveItem);

