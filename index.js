// src/index.js

const Product = require("./models/product.js");
const ShoppingCart = require("./models/ShoppingCart");

// Creating products
const product1 = new Product(1, "Laptop", 1500);
const product2 = new Product(2, "Smartphone", 800);
const product3 = new Product(3, "Headphones", 150);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 1); // 1 Laptop
cart.addItem(product2, 2); // 2 Smartphones
cart.addItem(product3, 3); // 3 Headphones

// Display the cart
console.log("Cart before removing any items:");
cart.displayCart();

// Get total items in the cart
console.log(`Total items in cart: ${cart.getTotalItems()}`);

// Get total cart value
console.log(`Total cart value: $${cart.getTotalCartValue()}`);

// Remove an item (Smartphone) from the cart
cart.removeItem(2);

// Display the cart again after removing an item
console.log("\nCart after removing the smartphone:");
cart.displayCart();

// Get total items in the cart after removal
console.log(`Total items in cart after removal: ${cart.getTotalItems()}`);

// Get total cart value after removal
console.log(`Total cart value after removal: $${cart.getTotalCartValue()}`);
