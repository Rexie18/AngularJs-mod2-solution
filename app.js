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
    name: "Musli",
    quantity: "10"
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

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
 itemAdder.shoppingList2 = shoppingList2;
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem= this;

 boughtItem.items = service.getItems();  
}

function ShoppingListService( ) {
  var service = this;
 
    service.move = function() {
      service.boughtItem.push(service.shoppingList2.splice(itemIdex, 1));
    };
  
   service.getItems = function () {
    return service.move;
    };
   }
})();


