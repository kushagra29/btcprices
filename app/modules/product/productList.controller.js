(function(){

'use strict';

angular
	.module('ProductModule')
	.controller('productListCtrl', ProductListCtrl)

function ProductListCtrl($sessionStorage, $location, $interval, productListService){
	var vm = this;
	
	$interval(function(){
		productListService
			.getProducts()
			.then(function(currency){
				vm.currency =  currency;
				//vm.rateTime = new Date();
			});
	},1000);
}
})();