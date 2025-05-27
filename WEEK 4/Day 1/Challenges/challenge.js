let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Arrow function to display the fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// 2. Arrow function to clone groceries and experiment
const cloneGroceries = () => {
    // Copy primitive value (string) by value
    let user = client;
    
    // Change original client
    client = "Betty";

    // user remains "John" because strings are copied by value
    console.log('user:', user);  // John
    console.log('client:', client); // Betty

    // Copy groceries object by reference
    let shopping = groceries;

    // Change totalPrice (primitive property)
    shopping.totalPrice = "35$";

    // Change nested property
    shopping.other.paid = false;

    // Check groceries after modification
    console.log('groceries.totalPrice:', groceries.totalPrice); // 35$
    console.log('groceries.other.paid:', groceries.other.paid); // false

    /*
      Explanation:
      - groceries and shopping point to the same object (reference copy),
        so changes in shopping affect groceries.
      - client and user are primitive strings, copied by value, so
        changing client does NOT affect user.
    */
}

// Run functions
displayGroceries();
cloneGroceries();
