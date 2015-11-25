var app=angular.module('isolatectrl',[]);

app.controller("chorectrl",function($scope){

$scope.ctrlflavor="blackberry"


});

app.directive("drink",function(){
	return{

		scope:{

			flavor:"@"
		},

         template:'<div>{{flavor}}</div>',
        
          
         


	}





})