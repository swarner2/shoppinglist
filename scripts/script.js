var app = angular.module("shoppingList",[]);
console.log(app)
app.controller('getData', ['$scope', function($scope) {
  $scope.data = data;
  $scope.myFunc = function(searchItem){
    console.log(searchItem)
  }
}])
