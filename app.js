(function () {
'use strict';
  
  
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
  itemAdder.shoppingList2 = ShoppingListService.service.addToList;
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem= this;
  boughtItem.boughtList= ShoppingListService.service.move;
}

function ShoppingListService( ) {
  var service = this;
  
  var newItem = {
          name: " ",
          quantity: " "
        }
  
  service.boughtItem = [{
          name: " ",
          quantity: " "
        }];
  
  service.shoppingList2 = [
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
  
  service.addToList = function() {
        return service.shoppingList2.push(ShoppingListService.copy(newItem));
      }
 
    service.move = function() {
      service.boughtItem.push(service.shoppingList2.splice(itemIdex, 1));
    };
  
  }
  
})();


