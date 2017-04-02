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
  
  itemAdder.remove = function (itemIndex){
  ShoppingListService.remove(itemIndex)
 };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem = this;
//   boughtItem.boughtList = ShoppingListService.getItems();
boughtItem.boughtList = ShoppingListService.bought;
}

function ShoppingListService( ) {
  var service = this;
  
  service.bought = [];    
  service.shoppingList2 = [
  {
    "name": "Milk",
    "quantity": "2"
  },
  {
    "name": "Donuts",
    "quantity": "200"
  },
  {
    "name": "Cookies",
    "quantity": "300"
  },
   {
    "name": "Musli",
    "quantity": "10"
  },
  {
    "name": "Chocolate",
    "quantity": "5"
  }
];
	

service.remove = function(item, from, to) {


        var idx=from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);      
        }
    };

    
 
// var bought = [];

// service.addData = function(itemName, quantity) {   // function(remove)
// 	var item = {
// 		name: itemName,
// 		quantity: quantity
// 		};
		
// 	    bought.push(item);
//      };

// 	service.remove = function(itemIndex){
// 		service.shoppingList2.splice(itemIndex,1);
// 	}

// 	service.getItems = function(){
// 		return bought;
// 	};
	
	
}
 
  
})();


