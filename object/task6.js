const inventory = [
    { itemName: "Laptop", category: "Electronics", stock: 4 },
    { itemName: "Phone", category: "Electronics", stock: 0 },
];

function totalStockByCategory (category) {
    return inventory
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + item.stock, 0);
}

function check(category) {
    let a = totalStockByCategory(category);
    if(a<5) return "Kam qoldi mahsulotlar";
    return  "Yetarli";
}

console.log(check('Electronics'))