let products = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(product = {id,name,price,stock}) {
    products.push(product);
}

function updateStock(productId,stock) {
    products = products.map(product => {
        if(product.id===productId) {
            product.stock = stock;
        }
    });
    return "Can't find any products";
}


function deleteProduct(productId) {
    products = products.filter(product=> product.id !== productId);
}

function findProduct(name) {
    return products.find(product=>product.name.toLowerCase()===name.toLowerCase())
}

