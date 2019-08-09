const staticFunc = (function (pBool)
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
