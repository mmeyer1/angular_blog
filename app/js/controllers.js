'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
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
  }]);
