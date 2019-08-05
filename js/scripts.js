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
var totprice;
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

        var size = $("select#size").val();
        if (size === "Small") {
          var price1 = 10;
          console.log(price1);
        } else if (size === "Medium") {
          var price1 = 12;
          console.log(price1);
        } else if (size === "Large") {
          var price1 = 13;
          console.log(price1);
        } else {
          alert("please fill!")
        }



        var crust = $("select#crust").val();
        if (crust === "Crispy") {
          var price2 = 3;
          console.log(price2);

        }
        else if (crust === "Stuffed") {
          var price2 = 4;
          console.log(price2);
        }
        else if (crust === "Gluten - free") {
          var price2 = 3;
          console.log(price2);
        }
        else {
          console.log(price2);
        }
        var toppings = $("select#toppings").val();
        if (toppings === "Onions") {
          var price3 = 1;
          console.log(price3)
        }
        else if (toppings === "Green-Peppers") {
          var price3 = 2;
          console.log(price3);
        }
        else if (toppings === "Black-Olives") {
          var price3 = 3;
          console.log(price3);
        }
        else if (toppings === "Spinach") {
          var price3 = 3;
          console.log(price3);

        }
        else if (toppings === "Mushrooms") {
          var price3 = 2;
          console.log(price3)
        }
        else if (toppings === "Chicken") {
          var price3 = 4;
          console.log(price3);
        }
        else if (toppings === "Pepperoni") {
          var price3 = 2;
          console.log(price3);
        }
        else if (toppings === "Canadian-Bacon") {
          var price3 = 5;
          console.log(price3);

        }
        else {
          console.log(price3);
        }
        var number = $("select#number").val();

        var newPizzaOrder = new order(size, crust, toppings, number);
        console.log(newPizzaOrder);
        var price = parseInt(price1) + parseInt(price2) + parseInt(price3);
        totprice = price * number;

        // $("#submit-custom-pizza").click(function () {
        //   $("#address").show();
        $("div#final-cost").append("<p>" + "the total price of pizza is " + " $" + totprice + " " + "</p>");
        // $("#pickup-btn,#delivery-btn,#home").hide();
        // $("ul#contacts").append("<li><span class='contact'>" + newPizzaOrder.pizzaCost + "</span></li>");
      });
    });
  });
});
// });
$(document).ready(function () {
  $("#delivery-btn").click(function () {
    var choice = prompt("enter your location");
    alert("thank you you will receive the pizza at " + choice);
    var deliv = 5;
    var tot = totprice + deliv;
    $("div#final-cost").append("<p>" + "the total price of pizza and delivery " + " $ " + tot + " " + "</p>");
    // alert("thank you you will receive the pizza at " + tot);
    //   $("#pizza-details-dropdown").show();
    // $("#final-cost").text(newPizzaOrder.finalCost());
    // $("#pizza-details").append(" " + pizzaDetails + "");
    // //   $("#size, #crust, #toppings, #number").val("");
    // });
    // $("#pizza-details-dropdown").click(function () {
    //   $("#pizza-details").toggle();
  });
});