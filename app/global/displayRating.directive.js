(function(){
    'use strict';
    angular.module('GlobalModule')
    .directive('displayRating', function() {
        return {
            restrict: 'A',
            scope: {
                rating: "=rating"
            },
            templateUrl: 'global/rating-display.html',
            controller: displayRatingCtrl,
            controllerAs: 'vm'
        };
    });

    function displayRatingCtrl($scope){
        var vm = this;
        var MAXRATING = 5;
        var productRating = $scope.rating;
        vm.stars = [];
        for(var i = 1; i <= MAXRATING; i++){
            if(productRating >= 1){
                vm.stars.push("fullStar.png");
            }else if(productRating > 0 && productRating < 1){
                vm.stars.push("halfStar.png");
            }else{
                vm.stars.push("star.png");
            }
            productRating = productRating - 1;
        }
    }
})();