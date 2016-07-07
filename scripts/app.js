var app = angular.module("shoppingList",[]);

var data = [
  {
    name : 'Shopping List',
    items : [
      {name: 'apple' , catagory: 'produce'},
      {name: 'bacon' , catagory: 'meat'},
      {name: 'milk' , catagory: 'dairy'},
    ],
  },
  {
    name : 'In Cart',
    items : [
      {name: 'beans' , catagory: 'produce'},
      {name: 'batteries' , catagory: 'non-food'},
      {name: 'bread' , catagory: 'carbs'},
    ],
  },
]


console.log(app)
app.controller('getData', ['$scope', function($scope) {
  $scope.data = data;
  $scope.myFunc = function(searchItem){
    console.log(searchItem)
  }
}])
