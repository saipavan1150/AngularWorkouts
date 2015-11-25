var app=angular.module('isolatectrl',[]);
var phone={}
phone.controllers={}

phone.controllers.chorectrl=function($scope){

this.sayHi=function(){
	
	alert("i m gud")
}
return $scope.chorectrl=this;


});
app.controller(phone.controllers);