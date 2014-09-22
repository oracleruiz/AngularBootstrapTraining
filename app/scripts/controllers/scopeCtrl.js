carApp.controller('scopeCtrl', ["$scope", function ($scope) {

    $scope.scopeText = "Default text";

    $scope.$on('MyEvent', function (event, data){
        $scope.scopeText = data;
    });

}]);
