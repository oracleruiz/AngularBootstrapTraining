'use strict';

carApp.directive('friendItem', function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/friendItem.html',
        controller: ''
    };
});

carApp.directive('searchItem', function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/searchItem.html'
    };
});
