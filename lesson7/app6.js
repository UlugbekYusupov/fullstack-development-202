const ombor = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
  { itemName: "Table", category: "Furniture", stock: 3 },
];

function kategoriyaStock(category) {
  let jami = 0;

  for (i in ombor) {
    if (ombor[i].category === category) {
      jami += ombor[i].stock;
    }
  }

  return jami;
}

function kamStockAlert() {
  let kamMahsulotlar = [];

  for (i in ombor) {
    if (ombor[i].stock < 5) {
      kamMahsulotlar.push(ombor[i].itemName);
    }
  }

  return kamMahsulotlar;
}

console.log("Electronics jami stock:", kategoriyaStock("Electronics"));

console.log("Kam qolgan mahsulotlar:", kamStockAlert());
