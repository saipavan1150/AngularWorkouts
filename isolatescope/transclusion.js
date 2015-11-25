var app=angular.module('isolatectrl',[]);
app.controller("chorectrl",function(){



});
app.directive("panel",function(){

return{

restrict:"E",
transclude:true,
template:'<div class="panel" ng-transclude> this is a panel component </div>'

}


});



