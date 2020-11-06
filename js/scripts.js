// Business Logic ----- >

function Pizza() {
  this.size = "large";
  this.toppings = [];
}
function PizzaOrder(pizza) {
  this.smallPizzaCount = 0;
  this.largePizzaCount = 0;
  this.smallToppingsCount = 0;
  this.largeToppingsCount = 0;
}
function PizzaOrderPrice(pizzaOrder) {
  this.largePrice = 34;
  this.smallPrice = 28;
}
function calculateTotal(pizzaOrderPrice, pizzaOrder) {
  let orderTotal = 0;
  orderTotal += pizzaOrderPrice.smallPrice * pizzaOrder.smallPizzaCount;
  orderTotal += pizzaOrderPrice.largePrice * pizzaOrder.largePizzaCount;
  orderTotal += pizzaOrder.smallToppingsCount * 2;
  orderTotal += pizzaOrder.largeToppingsCount * 3;
  orderTotal *= 1.08875; // add NYC sales tax
  return orderTotal;
}