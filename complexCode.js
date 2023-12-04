/*
   Filename: complexCode.js
   Description: This complex JavaScript code demonstrates a fictional online shopping cart system with various features, such as adding and removing items, calculating totals and discounts, applying promotions, managing inventory, and generating purchase receipts.
*/

// Define item object constructor
function Item(name, price, quantity) {
   this.name = name;
   this.price = price;
   this.quantity = quantity;
}

// Initialize shopping cart array
var shoppingCart = [];

// Add items to the cart
function addItemToCart(name, price, quantity) {
   var newItem = new Item(name, price, quantity);
   shoppingCart.push(newItem);
   console.log("Item added to cart: " + newItem.name);
}

// Remove items from the cart
function removeItemFromCart(name) {
   for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].name === name) {
         shoppingCart.splice(i, 1);
         console.log("Item removed from cart: " + name);
         break;
      }
   }
}

// Calculate total cost of the items in the cart
function calculateTotal() {
   var total = 0;
   for (var i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].price * shoppingCart[i].quantity;
   }
   return total;
}

// Apply a discount to the total
function applyDiscount(discountPercentage) {
   var total = calculateTotal();
   var discountAmount = (total * discountPercentage) / 100;
   return total - discountAmount;
}

// Define available promotions
var promotions = {
   "SUMMER2021": { discountPercentage: 15 },
   "SALE10OFF": { discountPercentage: 10 },
   "FREESHIPPING": { discountPercentage: 100 }
};

// Apply a promotion to the total
function applyPromotion(promoCode) {
   if (promotions.hasOwnProperty(promoCode)) {
      console.log("Promotion applied: " + promoCode);
      return applyDiscount(promotions[promoCode].discountPercentage);
   } else {
      console.log("Invalid promotion code: " + promoCode);
      return calculateTotal();
   }
}

// Manage inventory levels for items
var inventory = {
   "Shirt": 20,
   "Pants": 15,
   "Shoes": 10
};

// Process purchase and generate receipt
function processPurchase(customerName, promoCode) {
   console.log("Processing purchase for: " + customerName);
   var total = applyPromotion(promoCode);
   console.log("Total after promotion: $" + total.toFixed(2));
   console.log("Generating receipt...");
   console.log("-----------------------");
   console.log("Customer: " + customerName);
   console.log("Items Purchased:");
   for (var i = 0; i < shoppingCart.length; i++) {
      console.log(
         shoppingCart[i].name +
            " x " +
            shoppingCart[i].quantity +
            " - $" +
            (shoppingCart[i].price * shoppingCart[i].quantity).toFixed(2)
      );
      inventory[shoppingCart[i].name] -= shoppingCart[i].quantity;
   }
   console.log("-----------------------");
   console.log("Total: $" + total.toFixed(2));
   console.log("-----------------------");
   console.log("Thank you for shopping with us!");
}

// Test the code
addItemToCart("Shirt", 30, 2);
addItemToCart("Pants", 40, 1);
console.log("Cart total: $" + calculateTotal().toFixed(2));
console.log("Apply promotion code: SUMMER2021");
var totalAfterPromotion = applyPromotion("SUMMER2021");
console.log("Total after promotion: $" + totalAfterPromotion.toFixed(2));
removeItemFromCart("Shirt");
console.log("Cart total: $" + calculateTotal().toFixed(2));
processPurchase("John Doe", "SUMMER2021");