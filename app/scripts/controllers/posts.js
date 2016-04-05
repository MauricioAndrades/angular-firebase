'use strict';

/**
 * @ngdoc function
 * @name angularfireCleanApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularfireCleanApp
 */
angular.module('angularfireCleanApp')
  .controller('PostsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
