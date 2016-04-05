'use strict';

/**
 * @ngdoc function
 * @name angularfireCleanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireCleanApp
 */
angular.module('angularfireCleanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
