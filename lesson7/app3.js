const mahsulotlar = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 },
];

function mahsulotQoshish(id, nomi, narxi, stocki) {
  mahsulotlar.push({
    id: id,
    name: nomi,
    price: narxi,
    stock: stocki,
  });
}

function stockYangilash(id, yangiStock) {
  for (i in mahsulotlar) {
    if (mahsulotlar[i].id === id) {
      mahsulotlar[i].stock = yangiStock;
    }
  }
}

function mahsulotOchirish(id) {
  for (i in mahsulotlar) {
    if (mahsulotlar[i].id === id) {
      mahsulotlar.splice(i, 1);
    }
  }
}

function mahsulotTopish(nomi) {
  for (i in mahsulotlar) {
    if (mahsulotlar[i].name === nomi) {
      return mahsulotlar[i];
    }
  }
}

mahsulotQoshish(3, "Mouse", 50, 20);

stockYangilash(1, 5);

console.log(mahsulotTopish("Laptop"));

mahsulotOchirish(2);

console.log(mahsulotlar);
