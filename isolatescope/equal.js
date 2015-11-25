var app=angular.module('isolatectrl',[]);

app.controller("chorectrl",function($scope){

$scope.ctrlflavor="strawberry"


});

app.directive("drink",function(){
	return{

		scope:{

			flavor:"="
		},

         template:'<input type="text" ng-model="flavor">'
        
          
         


	}





})