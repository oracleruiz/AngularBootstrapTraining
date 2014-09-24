carApp.controller('searchCtrl', ["$scope","Cars", function ($scope,Cars) {

    $scope.searchTerm = "";
    $scope.cars = [];
    $scope.noResults = false;

    $scope.search = function(){
        //Clear the array on every search
        $scope.cars = [];

        var serv = new Cars();
        var params = {q:$scope.searchTerm,rows:10};

        serv.$get(params,
            function(data){
                if(data.response.docs.length > 0){
                    $scope.cars = data.response.docs;
                    $scope.noResults = false;
                }
                else
                {
                    $scope.noResults = true;
                }
            },
            function(error){
                $scope.noResults = true;
            });
    }

}]);
