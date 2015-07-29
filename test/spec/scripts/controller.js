
'use strict';

describe('AppCtrl', function () {
  beforeEach(module('app'));

  var scope, AppCtrl;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller('AppCtrl', {
      $scope: scope
    });
  }));

  it('should tell you to begin awesome here', function () {
    expect(scope.start).toBe('begin awesome here');
  });

});

