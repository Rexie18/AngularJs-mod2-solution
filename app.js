(function () {
'use strict';
  
  
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
 ShoppingListService.shoppingList2 = shoppingList2;
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem= this;

 boughtItem.items = ShoppingListService.move;  
}

function ShoppingListService( ) {
  var service = this;
  
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
    name: "Musli",
    quantity: "10"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];
 
    service.move = function() {
      service.boughtItem.push(service.shoppingList2.splice(itemIdex, 1));
    };
  
  }
  
})();


