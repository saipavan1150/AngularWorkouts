var samsung=angular.module("samsung",['ngRoute']);

samsung.config(function($routeProvider){
	
	$routeProvider
	
	.when('/',{
		
		templateUrl:'home.html',
		controller:'mainController'
		
	})
	.when('/about',{
		templateUrl:'about.html',
		controller:'aboutController'
		
	})
	.when('/contact',{
		templateUrl:'contact.html',
		controller:'contactController'
		
	});
	
	
	
});
samsung.controller('mainController',function($scope){
	
	$scope.message="hi i m fine";
});

samsung.controller('aboutController',function($scope){
	
	$scope.message="hi u r also fine";
});

samsung.controller('contactController',function($scope){
	
	$scope.message="hi u r also happy";
});



