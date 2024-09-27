// src/models/ShoppingCartItem.js

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price of the item
  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

module.exports = ShoppingCartItem;
