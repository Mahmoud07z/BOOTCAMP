const products = require("./products.js");

function findProductByName(productName) {
  const product = products.find(item => item.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log(`Product found: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

findProductByName("Laptop");
findProductByName("Desk Lamp");
findProductByName("Gaming Mouse");
findProductByName("Smartphone"); 