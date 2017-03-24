
(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

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
.controller('ShoppingListController', ShoppingListController);
.controller('ToBuyController', ToBuyController);
.controller('AlreadyBoughtController', AlreadyBoughtController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

})();

// (function () {
// 'use strict';

// var ToBuyList = [
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

// angular.module('ShoppingListCheckOff', [])
// .controller('ToBuyController', ToBuyController);

// ToBuyController.$inject = ['$scope'];
// function ToBuyController($scope) {
//   $scope.ToBuyController = ToBuyList;
  
//   $scope.addToList = function () {
//     var newItem = {
//       name: $scope.newItemName,
//       quantity: $scope.newItemQuantity
//     };

//     $scope.ToBuyList.push(newItem);
//   };
// }

// })();


// // (function () {
// // 'use strict';

// // angular.module('ShoppingListCheckOff', [])
// // .controller('ToBuyController', ToBuyController)
// // .controller('AlreadyBoughtController', AlreadyBoughtController)
// // .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

// // ToBuyController.$inject = ['$scope'];
// // AlreadyBoughtController.$inject = ['$scope'];
  
// // function ToBuyController($scope) {
// //   var ToBuyController = [
// //   {
// //     name: "Milk",
// //     quantity: "2"
// //   },
// //   {
// //     name: "Donuts",
// //     quantity: "200"
// //   },
// //   {
// //     name: "Cookies",
// //     quantity: "300"
// //   },
// //   {
// //     name: "Chocolate",
// //     quantity: "5"
// //   }
// // ];
// //   $scope.ToBuyController = ToBuyController;
  
// //   $scope.AlreadyBoughtController = function () {
// //     var newItem = {
// //       name: $scope.newItemName,
// //       quantity: $scope.newItemQuantity
// //     };

// //     $scope.AlreadyBoughtController.push(newItem);
// //   };
// // }

// // })();


// // //http://jsfiddle.net/ehmorzpx/
