var app=angular.module("myApp",[])
app.directive("superhero",function(){
return{
restrict:"E",
controller:function($scope){
$scope.abilities=[]
this.addstrength=function(){
$scope.abilities.push("strength")


}
this.addflight=function(){
$scope.abilities.push("flight")


}
this.addspeed=function(){
$scope.abilities.push("speed")


}





},
link:function(scope,element)
{
element.bind("mouseenter",function(){
console.log(scope.abilities);


})


}


}




})

app.directive("strength",function(){

return{
require:"superhero",
link:function(scope,element,attrs,sai){
sai.addstrength();


}


}




})
app.directive("speed",function(){

return{
require:"superhero",
link:function(scope,element,attrs,sai){
sai.addspeed();


}


}




})
app.directive("flight",function(){

return{
require:"superhero",
link:function(scope,element,attrs,sai){
sai.addflight();


}


}




})

