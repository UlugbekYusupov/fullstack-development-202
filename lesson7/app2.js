const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 },
];

let engQimmatNomi = "";
let engQimmatNarxi = 0;
let savatNarxi = 0;
function karzinka(savat) {
  for (i in savat) {
    let mahsulotNarxi = savat[i].price * savat[i].quantity;
    savatNarxi += mahsulotNarxi;
    if (mahsulotNarxi > engQimmatNarxi) {
      engQimmatNarxi = mahsulotNarxi;
    }
  }
}
karzinka(cart);
console.log(engQimmatNarxi);
if (savatNarxi > 100) {
  savatNarxi = savatNarxi - savatNarxi * 0.1;
}
console.log(savatNarxi);
