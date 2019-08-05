
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

    $("#submit-custom-pizza").click(function () {
      $("form#custom-pizza").submit(function (event) {
        event.preventDefault();

        var size = $("select#size").val();
        var crust = $("select#crust").val();
        var toppings = $("select#toppings").val();
        var number = $("select#number").val();

        var newPizzaOrder = new order(size, crust, toppings, number);
        console.log(newPizzaOrder);

        $("#delivery-btn").click(function () {
          $("#address").show();
          $("#pickup-btn,#delivery-btn,#home").hide();
          $("#pizza-details").append(" " + pizzaDetails + "");
        });
      });
    });
  });

  //   var streetAddress = $("input#street-add").val();
  //   var city = $("input#city-add").val();
  //   var newAddress = new Address(streetAddress, city);
  //   $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
});
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
