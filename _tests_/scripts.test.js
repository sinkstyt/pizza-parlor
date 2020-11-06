// Describe: Pizza()

// Test: The constructor function will allow instances that hold "size" and "toppings" key-value pairs
// Expect: new Pizza().toEqual("Object").withKeys("size", "toppings")

// Describe: PizzaOrder()

// Test: The constructor function will allow instances to hold count of user-selected pizzas.
// Expect: new PizzaOrder(size/s, topping/s).toEqual("Object").withKeys("smallPizzaCount", "largePizzaCount")

// Describe: PizzaOrderPrice()

// Test: It will return a number that equals the price for an instance of new PizzaOrder.
// Expect: PizzaOrderPrice(pizzaOrder).toEqual(number)

// Test: It will store a key-value pair for large pizza price.
// Expect: PizzaOrderPrice(this.largePrice).toEqual(number)

// Test: It will store a key-value pair for small pizza price.
// Expect: PizzaOrderPrice(this.smallPrice).toEqual(number)