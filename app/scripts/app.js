'use strict';

// Declare app level module which depends on views, and components
var carApp = angular.module('Cars2015', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/scope',{
          templateUrl: 'views/scope.html',
          controller: 'scopeCtrl'
      })
      .when('/',{
          templateUrl: 'views/resultView.html',
          controller: 'searchCtrl'
      })
      .otherwise({redirectTo: '/'});
}]);
