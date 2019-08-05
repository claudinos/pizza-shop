
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
    $("#claudine").show();

    $("#submit-custom-pizza").click(function () {
      $("form#custom-pizza").submit(function (event) {
        event.preventDefault();

        
        $("#delivery-btn").click(function () {
          $("#address").show();
          $("#final-cost").append($("h2"));
          // $("#pickup-btn,#delivery-btn,#home").hide();
          // $("ul#contacts").append("<li><span class='contact'>" + newPizzaOrder.pizzaCost + "</span></li>");
        });
      });
    });
  });
});
var choice = prompt("enter your location");
alert("thank you you will receive the pizza at " + choice);
//   var streetAddress = $("input#street-add").val();
//   var city = $("input#city-add").val();
//   var newAddress = new Address(streetAddress, city);
//   $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
// });
// $("form#custom-pizza").submit(function (event) {

//   var newPizzaOrder = new Order();
//   newPizzaOrder.pizzaCost();
//   totalPriceArray.push(newPizzaOrder.pizzaPrice);
//   $("#pizza-details-dropdown").show();
//   $("#final-cost").text(newPizzaOrder.finalCost());
//   $("#pizza-details").append(" " + pizzaDetails + "");
//   $("#size, #crust, #toppings, #number").val("");
// });
// $("#pizza-details-dropdown").click(function () {
//   $("#pizza-details").toggle();
// });
