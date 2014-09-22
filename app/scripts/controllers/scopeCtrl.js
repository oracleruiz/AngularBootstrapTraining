carApp.controller('scopeCtrl', ["$scope", function ($scope) {

    $scope.scopeText = "Default text";

    $scope.$on('MyEvent', function (event, data){
        $scope.scopeText = data;
    });

    $scope.friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'}
    ];

}]);