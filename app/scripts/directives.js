'use strict';

carApp.directive('carItem', function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/carItem.html'
//        controller: 'advancedSearchController'
    };
});


carApp.directive('scopeItem', function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/scopeItem.html',
        controller: 'scopeCtrl'
    };
});
