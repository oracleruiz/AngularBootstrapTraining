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


carApp.directive('friendItem', function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/friendItem.html',
        controller: ''
    };
});
