'use strict';

angular.module('stackStoreApp')
  .controller('CategoryCtrl', function ($scope, $routeParams, Category) {
    
  	$scope.categoryResults = Category.search({name: $routeParams.name});
 	$scope.categoryName = $routeParams.name;
 	// console.log($scope.categoryResults);
  });
