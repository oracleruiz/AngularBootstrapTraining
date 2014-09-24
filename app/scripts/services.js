carApp.service("sharedService", function () {

    this.sharedList = [];
});

/*Consuming REST SERVICE*/
var carsService = angular.module('carsService', ['ngResource']);

carsService.factory('Cars', ['$resource',
    function($resource){
        return $resource('http://localhost:8983/solr/collection1/select',
            {   wt:'json',
                defType:'edismax',
                qf:'model^2.0 cyl trans drive fuel^1.1 veh_class make^2.0',
                stopwords:'true',
                lowercaseOperators:true
            },
            {query: {method:'GET', params:{}, isArray: true}
        });
    }]);
