(function(){
	'use strict';
	angular.module('AssignmentApp', [
		'ngRoute',
		'ngStorage',
		'GlobalModule',
		'ProductModule'
	]).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$routeProvider.otherwise({redirectTo: '/productListView'});
			$routeProvider
				.when('/productListView', {
					templateUrl: 'modules/product/product-list.html',
					controller: 'productListCtrl',
					controllerAs: 'vm'
			});
	}]);
})();