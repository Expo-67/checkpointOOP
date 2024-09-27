// src/models/ShoppingCart.js

const ShoppingCartItem = require("./ShoppingCartItem");

class ShoppingCart {
  constructor() {
    this.items = []; // Array to hold ShoppingCartItem instances
  }

  // Method to get total items in the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add items to the cart
  addItem(product, quantity) {
    const cartItem = new ShoppingCartItem(product, quantity);
    this.items.push(cartItem);
  }

  // Method to remove an item from the cart based on product id
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      this.items.forEach((item) => {
        console.log(
          `${item.product.name} (x${
            item.quantity
          }) - $${item.calculateTotalPrice()}`
        );
      });
    }
  }

  // Method to calculate total cart value
  getTotalCartValue() {
    return this.items.reduce(
      (total, item) => total + item.calculateTotalPrice(),
      0
    );
  }
}

module.exports = ShoppingCart;
