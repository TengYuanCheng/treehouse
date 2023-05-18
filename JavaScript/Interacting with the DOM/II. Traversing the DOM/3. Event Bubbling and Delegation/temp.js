

function hiAndBye(func){
 func()
console.log("Bye"); 
}

hiAndBye(()=>{
	console.log("Greeting")
});