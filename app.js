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
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemAdder = this;
 itemAdder.shoppingList2 = shoppingList2;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
 var boughtItem= this;

 boughtItem.items = ShoppingListService.getItems();  
}

function ShoppingListService( ) {
  var service = this;

    service.move = function() {
      service.boughtItem.push(service.shoppingList2.splice(temIdex, 1));
    };
  }
})();


