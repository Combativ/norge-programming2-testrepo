# Refactor

The followinf function needs to be refactored to be less verbose etc.
Do so without braking the tests. i.e. remove the for loop using reduce

```JavaScript

function calculateTotalPrice(cart, taxRate) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total = total + item.price * item.quantity;
  }
  total = total + total * taxRate;
  return total;
}


test.isEqual(calculateTotalPrice([{ price: 10, quantity: 2 }], 0.1), 22); 
test.isEqual(calculateTotalPrice([{ price: 5, quantity: 4 }], 0.2), 24);  
test.isEqual(calculateTotalPrice([], 0.1), 0);                           
test.isEqual(calculateTotalPrice([{ price: 15, quantity: 1 }], 0), 15);  

```