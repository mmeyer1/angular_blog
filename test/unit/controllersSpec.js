'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('MyCtrl1', { $scope: {} });
    expect(myCtrl1).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
    expect(myCtrl2).toBeDefined();
  }));

  describe('EntriesCtrl', function(){
    beforeEach(module('myApp'));

    it('should list some posts', inject(function($controller) {
      var scope = {};
        ctrl = $controller('EntriesCtrl', {scope = $scope});

        expect(scope.entries.length).toBe(>2);
        }))
  })
});
