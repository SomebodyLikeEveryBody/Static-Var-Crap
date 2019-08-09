const staticFunction = (function (pBool)
{
	let myStaticVar = false;
	
	return function (pBool) {
	    //if there is a parameter passed in the function, we give it the new value, else, it keep its value
		if(typeof (pBool) === typeof (false)) {
			myStaticVar = pBool;
		}
		
		return (myStaticVar);
	};
})();

console.log(staticFunction()) //==> shows false
staticFunction(true);
console.log(staticFunction()); //==> shows true
console.log(staticFunction(false)); //==> shows false
console.log(staticFunction(true)); //==> shows true
console.log(staticFunction()); //==> shows true
console.log(staticFunction(true)); //==> shows true
