(function () {
'use strict';

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
 service.shoppingList2 = shoppingList2;

  service.addToList = function () {
    var newItem = {
      name: service.newItemName,
      quantity: service.newItemQuantity
    };

    service.shoppingList2.push(newItem);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
 service.boughtItem = [""];

  service.move = function() {
    	var entries = service.shoppingList2.splice(1,1);
      service.boughtItem.push(entries[0]);
    };
};

})();

//http://jsfiddle.net/ehmorzpx/
