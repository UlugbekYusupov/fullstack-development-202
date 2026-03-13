function dynamicPricing(price, quantity) {
  let total = price * quantity;

  if (quantity > 5) {
    total = total * 0.8;
  } else if (quantity > 3) {
    total = total * 0.9;
  }

  return total;
}

console.log(dynamicPricing(100, 2));
