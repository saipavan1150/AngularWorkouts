var app=angular.module('isolatectrl',[]);

app.controller("chorectrl",function($scope){

$scope.isolatecontrol=function(chore){

alert(chore + "is done");

}

})
app.controller("isolctrl",function($scope){



$scope.isoctrl=function(scare){

	alert(scare + "is fine");
}


})

app.directive("kid",function(){
	return{

          restict:"E",
          scope:{
                
                done:"&"

               right:"&"

          },
          template:'<input type="text" ng-model="chore">' + 
           ' {{chore}}' +

          '<div class="button" ng-click="done({chore:chore})"> i m done </div>'
          '<div class="button" ng-click="right({scare:scare})"> i m fine </div>'


	}





})