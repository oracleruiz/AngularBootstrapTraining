carApp.controller('controllerOne', ["$scope",function ($scope) {
    
    $scope.item = "";
    $scope.list = [];

    $scope.addItem = function(){

        if($scope.item){
            $scope.list.push($scope.item);
            $scope.item = "";
        }
    };
}]);


carApp.controller('controllerTwo', ["$scope",function ($scope) {

    $scope.item = "";
    $scope.list = [];

    $scope.addItem = function(){
        if($scope.item){
            var obj = {'value':$scope.item};
            $scope.list.push(obj);
            $scope.item = "";
        }
    };
}]);

