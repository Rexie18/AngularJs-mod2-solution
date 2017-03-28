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
 service.shoppingList2 = shoppingList2;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
 service.boughtItem = [{
    name: " ",
    quantity: " "
  }];
}
  
function ShoppingListService(ShoppingListCheckOffService) {
  var service = this;

    service.move = function() {
      service.boughtItem.push(service.shoppingList2.splice());
    };
}

})();

// (function() {
//   'use strict';
//   angular.module('ShoppingListCheckOff', [])
//     .controller('ToBuyController', ['ShoppingListCheckOffService', function(service) {
//       // Inherit service
//       angular.extend(this, service);
//     }])
//     .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(service) {
//       // Inherit service
//       angular.extend(this, service);
//     }])
//     .service('ShoppingListCheckOffService', [function() {
//       // Item
//       var newItem = {
//           name: 'New Item',
//           quantity: " "
//         }
//         // Bought Items
//         this.boughtItem = [];
        
//         // Move Item
//         this.move = function (){
//           this.boughtItem.push(this.shoppingList2.unshift());
//         }
//         // Shopping list
//       this.shoppingList2 = [{
//         name: "Milk",
//         quantity: "2"
//       }, {
//         name: "Donuts",
//         quantity: "200"
//       }, {
//         name: "Cookies",
//         quantity: "300"
//       }, {
//         name: "Chocolate",
//         quantity: "5"
//       }];

//       // Add To list
//       this.addToList = function() {
//         return this.shoppingList2.push(angular.copy(newItem));
//       }
//     }]);
// })();


// var myApp = angular.module('myApp',[]);

// myApp.directive('myDirective', function() {
// 	return {
//   	restrict: 'A',
//     scope: {
//     	list: '=myDirective'
//     },
//   	//template: '{{myDirective}}',
//      template: '<li ng-repeat="entry in list"> {{entry}}</li>',
//     controller: function($scope) {
//     	console.log('init: ' + $scope.list);
//     }
//   };
// });

// function MyCtrl($scope) {
//     $scope.list1 = ['A', 'B', 'C'];
//     $scope.list2 = ['X', 'Y', 'Z'];
    
//     $scope.move = function() {
//     	var entries = $scope.list2.splice(1,1);
//       $scope.list1.push(entries[0]);
//     };
// }
 // //http://jsfiddle.net/ehmorzpx/
