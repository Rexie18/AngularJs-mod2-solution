
(function () {
'use strict';

var ToBuyController = [
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
.controller('ToBuyController', ToBuyController);

ToBuyController.$inject = ['$scope'];
function ToBuyController($scope) {
  $scope.ToBuyController = ToBuyList;
  
  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.ToBuyList.push(newItem);
  };
}

})();


// (function () {
// 'use strict';

// angular.module('ShoppingListCheckOff', [])
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

// ToBuyController.$inject = ['$scope'];
// AlreadyBoughtController.$inject = ['$scope'];
  
// function ToBuyController($scope) {
//   var ToBuyController = [
//   {
//     name: "Milk",
//     quantity: "2"
//   },
//   {
//     name: "Donuts",
//     quantity: "200"
//   },
//   {
//     name: "Cookies",
//     quantity: "300"
//   },
//   {
//     name: "Chocolate",
//     quantity: "5"
//   }
// ];
//   $scope.ToBuyController = ToBuyController;
  
//   $scope.AlreadyBoughtController = function () {
//     var newItem = {
//       name: $scope.newItemName,
//       quantity: $scope.newItemQuantity
//     };

//     $scope.AlreadyBoughtController.push(newItem);
//   };
// }

// })();


// //http://jsfiddle.net/ehmorzpx/
