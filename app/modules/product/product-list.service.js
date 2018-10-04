(function(){
    'use strict';
    angular
        .module('ProductModule')
        .factory('productListService',productListService)

    function productListService($http, $q){
        function getProducts(){
            //var productListApiUrl = "../../mockdata/sample.json";
            var productListApiUrl = "https://www.fibonaccirule.com/prices";
            var deferred = $q.defer();
            $http
                .get(productListApiUrl)
                .then(function(response){
                    deferred.resolve(response.data);
                },function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        }
        return {
                getProducts : getProducts
        };
    }
})();