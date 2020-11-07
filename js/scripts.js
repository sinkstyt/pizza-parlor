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
// function that is called on checkbox-gathered input data for all checked toppings. Function takes in an array as first arg, string as pulled using jQuery .val() as second arg
//  Should return an instance of PIzzaOrder constructor with appropriate key-values adjusted (toppingsCount by size of pizza)
function someToppings(arr, str) {
  pizzaOrderNow.
}

// User Interface Logic ------ >

$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let pizza1 = new Pizza;
    let pizzaOrderNow = new PizzaOrder;
    let pizzaOrderCurrentPrices = new PizzaOrderPrice;
    // reassign pizza1.size to match radio button checked
    let pizza1.size = $("input:radio[name=sizePick]:checked").val();
    // push toppings checked for pizza1 into pizza1.toppings array
    pizza1.toppings = $("input:checkbox[name=toppings-select]:checked").val();
    console.dir(pizza1.toppings);
    // append pizza1 details to results div
    
    // once pizza1 is submitted towards total, div.results.show();
    
    // Once Total.my.Order button is clicked, call appropriate func from B Logic

    // set .html of appropriate div.results child to display the order's total --> Maybe an h3 element?

  })
  // "reset-toppings" button ---- >
  $("#reset-toppings").click(function() {
    
  })

  // "get my total" button ----- >
  $("#calc-total").click(function() {

  })
})

/* $("#goal-button").click(function() {
  $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
  $("#new-goal").val("");
});
the above is a way to append child list item elements and then reset the value to an empty str