(function(){
    'use strict';

    angular.module('GlobalModule')
    .filter('sortBy', function() {
        return function(items, field, order) {
        if(angular.isDefined(items)){
                return items.sort(function(itemA,itemB){
                        if(order === "REVERSE"){
                            return itemB[field] - itemA[field];
                        }
                        else{
                            return itemA[field] - itemB[field];
                        }
                });
            }
        };
    });
})();