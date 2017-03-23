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
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['$scope'];
AlreadyBoughtController.$inject = ['$scope'];
  
function ToBuyController($scope) {
  $scope.ToBuyController = ToBuyController;
  
  $scope.AlreadyBoughtController = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.AlreadyBoughtController.push(newItem);
  };
}

})();



