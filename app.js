(function () {
'use strict';
  
  
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
  itemAdder.shoppingList2 = ShoppingListService.shoppingList2;
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem= this;
  boughtItem.boughtList= ShoppingListService.move;
}

function ShoppingListService( ) {
  var service = this;
  
  var newItem = {
          name: " ",
          quantity: " "
        }
 
  
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
  
 

  service.move = function() {
    	var entries = itemAdder.shoppingList2.splice(itemIdex, 1);
      boughtItem.boughtList.newItem.push(entries[0]);
    };
  
//     service.move = function() {
//       boughtItem.boughtList.push(itemAdder.shoppingList2.splice(itemIdex, 1));
//     };
  
  }
  
})();


