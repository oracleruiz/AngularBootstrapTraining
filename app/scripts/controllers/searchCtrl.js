carApp.controller('searchCtrl', ["$scope","Cars", function ($scope,Cars) {

    $scope.searchTerm = "";
    $scope.cars = [];

    $scope.search = function(){
        var serv = new Cars();
        var params = {q:$scope.searchTerm}

        serv.$get(params,
            function(data){
                $scope.cars = data.response.docs;
            },
            function(error){

            });
    }

}]);
