var app=angular.module("myApp",[])
app.directive("cartoon",function(){
return{
restrict:'C',
link:function(){
	alert("hi i m fine")
	
	
}
}
})

