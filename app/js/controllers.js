'use strict';

/* Controllers */

angular.module('angularBlog.controllers', [])
.factory('EntryFactory', function(){
  return{message: "Wooo Service!"}
})
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('EntriesCtrl', ['$scope', function($scope){
    $scope.entries = [
    {'title': 'First post!',
    'stuff': 'Blah BLAH blah blah!'},
    {'title': 'some other post',
    'stuff': 'More BlAH Blah Blah!'}];
  }])
.controller('newEntriesCtrl', ['$scope', function($scope){
  $scope.master = {};
  $scope.update = function(entry){
    $scope.master = angular.copy(entry);
  };

}]);
