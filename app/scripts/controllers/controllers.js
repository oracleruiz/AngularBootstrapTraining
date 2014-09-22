carApp.controller('controllerOne', ["$scope","sharedService", function ($scope,sharedService) {
    
    $scope.item = "";
    $scope.list = [];
    $scope.sharedService = sharedService;

    $scope.addItem = function(){

        if($scope.item){
            $scope.list.push($scope.item);
            $scope.item = "";
        }
    };
}]);


carApp.controller('controllerTwo', ["$scope","sharedService", function ($scope,sharedService) {

    $scope.item = "";
    $scope.list = [];
    $scope.sharedService = sharedService;

    $scope.addItem = function(index){
        var obj = {};

        if($scope.item){

            obj = {
                'index':index,
                'value':$scope.item
            };
            $scope.list.push(obj);
            //$scope.sharedService.sharedList.push(obj);
            $scope.item = "";
        }
    };
}]);

