// Describe: Pizza()

// Test: The constructor function will allow instances that hold "size" and "toppings" key-value pairs
// Expect: new Pizza().toEqual("Object").withKeys("size", "toppings")

// Describe: PizzaOrder()

// Test: The constructor function will allow instances to hold count of user-selected pizzas.
// Expect: new PizzaOrder(size/s, topping/s).toEqual("Object").withKeys("smallPizzaCount", "largePizzaCount")

// Test: The constructor function will allow instances to hold count of user-selected toppings for a large pie.
// Expect: new PizzaOrder("large", "toppingsCount").toEqual("Object").withKey("largeToppingsCount")

// Test: The constructor function will allow instances to hold count of user-selected toppings for a small pie.
// Expect: new PizzaOrder("small", "toppingsCount").toEqual("Object").withKey("smallToppingsCount")

// Describe: PizzaOrderPrice()

// Test: It will store a key-value pair for large pizza price.
// Expect: PizzaOrderPrice(this.largePrice).toEqual(number)

// Test: It will store a key-value pair for small pizza price.
// Expect: PizzaOrderPrice(this.smallPrice).toEqual(number)

// Describe: calculateTotal(pizzaOrderPrice)

// Test: It will return a number that equals the price for an instance of new PizzaOrderPrice.
// Expect: calculateTotal(pizzaOrderPrice).toEqual(number)