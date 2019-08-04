
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

// Order.prototype.sideCost = function () {
//   return this.sidePrice;
// }

// function Address(streetAddress, city) {
//   this.streetAddress = streetAddress;
//   this.city = city;
//   this.deliveryAddress = (streetAddress + "  " + city);
// }

$(document).ready(function () {
  $("#pickup-btn").click(function () {
    $("#order-content").show();

    