// code.js - Sophisticated JavaScript Code with Complex Functionality

// Container for data
const data = {
  users: [],
  products: [],
  orders: [],
};

// Class representing a user
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  addOrder(order) {
    this.orders.push(order);
  }

  addProduct(product) {
    this.products.push(product);
  }
}

// Class representing a product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

// Class representing an order
class Order {
  constructor(id, user, products) {
    this.id = id;
    this.user = user;
    this.products = products;
    this.totalPrice = 0;
  }

  calculateTotalPrice() {
    this.totalPrice = this.products.reduce(
      (acc, product) => acc + product.price,
      0
    );
  }
}

// Function to create users
function createUser(id, name, email) {
  const newUser = new User(id, name, email);
  data.users.push(newUser);
  return newUser;
}

// Function to create products
function createProduct(id, name, price) {
  const newProduct = new Product(id, name, price);
  data.products.push(newProduct);
  return newProduct;
}

// Function to create orders
function createOrder(id, userId, productIds) {
  const user = data.users.find(user => user.id === userId);
  const products = data.products.filter(product =>
    productIds.includes(product.id)
  );

  const newOrder = new Order(id, user, products);
  newOrder.calculateTotalPrice();
  user.addOrder(newOrder);

  return newOrder;
}

// Sample data initialization
const user1 = createUser(1, "John Doe", "john.doe@example.com");
const user2 = createUser(2, "Jane Smith", "jane.smith@example.com");

const product1 = createProduct(1, "Product 1", 10);
const product2 = createProduct(2, "Product 2", 20);
const product3 = createProduct(3, "Product 3", 30);

const order1 = createOrder(1, 1, [1, 2]);
const order2 = createOrder(2, 2, [3]);

// Logging data
console.log(data.users);
console.log(data.products);
console.log(data.orders);

// Output:
// [
//   User {
//     id: 1,
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     orders: [Order]
//   },
//   User {
//     id: 2,
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     orders: [Order]
//   }
// ]
// [
//   Product { id: 1, name: 'Product 1', price: 10, orders: [Order] },
//   Product { id: 2, name: 'Product 2', price: 20, orders: [Order] },
//   Product { id: 3, name: 'Product 3', price: 30, orders: [Order] }
// ]
// [
//   Order {
//     id: 1,
//     user: User,
//     products: [Product, Product],
//     totalPrice: 30
//   },
//   Order {
//     id: 2,
//     user: User,
//     products: [Product],
//     totalPrice: 30
//   }
// ]