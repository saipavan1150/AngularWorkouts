var app=angular.module('isolatectrl',[]);

app.controller("chorectrl",function($scope){

$scope.isolatecontrol=function(chore){

alert(chore + "is done");

}


})

app.directive("kid",function(){
	return{

          restict:"E",
          scope:{
                
                done:"&"

          },
          template:'<input type="text" ng-model="chore">' + 
           ' {{chore}}' +

          '<div class="button" ng-click="done({chore:chore})"> i m done </div>'


	}





})