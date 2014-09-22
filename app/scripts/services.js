var carServices = angular.module('carServices', ['']);

opaApiServices.factory("Account", ["$resource", function ($resource) {
    return $resource("URL TO SOLR",
        {},
        { /* metodos extra si se ocuparan*/}
    )}
]);

