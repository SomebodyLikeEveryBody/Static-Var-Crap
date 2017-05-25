//function using static variable
var myFunction = (function (pValue)
{
	var myStaticVar = 0;  //variable statique to treat
	
	return function (pValue) {
    //if there is a parameter passed in the function, we give it the new value, else, it keep its value
		if(typeof pValue != 'undefined')
			myVar = pValue;
		
		//Feedback
		alert(myVar);
	};
})();

test();		//show 0
test(5);	//show 5
test();		//show 5
