'use strict';

// Declare app level module which depends on views, and components
var carApp = angular.module('Cars2015', [
    'ngRoute',
    'carsService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/scope',{
          templateUrl: 'views/scope.html',
          controller: 'scopeCtrl'
      })
      .when('/service',{
          templateUrl: 'views/services.html',
          controller: ''
      })
      .when('/ngrepeat',{
          templateUrl: 'views/ngrepeat.html',
          controller: 'ngrepeatCtrl'
      })
      .when('/search',{
          templateUrl: 'views/search.html',
          controller: 'searchCtrl'
      })
      .otherwise({redirectTo: '/search'});
}]);
