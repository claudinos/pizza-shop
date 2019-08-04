
var totalPriceArray = [];
function order(size, toppings, crust, number) {
  this.customSize = size;
  this.crust = crust;
  this.Topping = toppings;
  this.number = number;
}
order.prototype.pizzaCost = function () {
  return this.customSize + " " + this.crust + " " + this.Topping + " " + this.number
}

