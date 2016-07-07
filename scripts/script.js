var app = angular.module('myApp', []);

app.controller('simpleController', [$scope, function($scope){
  $scope.data = [1,2,3,4,5]
}])
