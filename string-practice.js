
// 1. Write a JavaScript function to check whether an `input` is a string or not.
function isString(input){
	if(Object.prototype.toString.call(input) === '[object String]'){
		return true
	} else {
		return false
	}
}
isString("lalala la");
isString(234);

// 2. Write a JavaScript function to check whether a string is blank or not.

function blank(inp){
	if(inp === ""){
		return true
	} else {
		return false
	}
}
blank("");
blank("abc");

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function convert(inp){
	var inp = inp;
	var ar = []
	inp = inp.split(" ");
	console.log(inp);
}
convert("John Small Third")

// 4. Write a JavaScript function to remove specified number of characters from a string.
function rem(str, val){
	var str = str.slice(0, val);
	console.log(str);
}
convert("John Small", 3);

// 5. Write a JavaScript function to convert a string in abbreviated form. 
function abbr(str){
	var index = str.indexOf(" ") + 2;
	var res = str.slice(0, index)
	console.log(res + ".")
}
abbr("Peter Simonov");
abbr("John Small");


// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
function hide(email){
	var ind = email.indexOf("_");
	var ind2 = email.indexOf("@");
	var dif = ind2 - ind;
	var remove = email.substr(ind, dif);
	var result = email.replace(remove, "...");
	console.log(result);
}
// 7. Write a JavaScript function to parameterize a string. Test Data : ????
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
function param(st){
	var st = st.toLowerCase();
	for(var i = 0; i < st.length; i++){
		st.replace(" ", "-");
	}
	console.log(st);
}

// 8. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function cap(str){
	var l1 = str[0].toUpperCase();
	var result = str.replace(str[0], l1);
	console.log(result);
}
cap("john small");
cap("abcdefg hi");

//9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capital(str){
	str = str.split(" ");
	for (var i = str.length - 1; i >= 0; i--) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1,(str[i].length - 1));
		console.log(str[i])
	};
	str = str.join(" ");
	console.log(str);
}

capital("john small");
capital("abcdefg hi");


// 10. Write a JavaScript function to convert a string into camel case. Go to the editor
// Test Data :
// console.log(camelize("JavaScript Exercises")); 
// console.log(camelize("JavaScript exercises")); 
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises" 
// "JavaScriptExercises" 
// "JavaScriptExercises"
function camel(str){
	var str = str.split(" ");
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1,(str[i].length - 1))
	};
	str = str.join("");
	console.log(str);
}

camel("john small");
camel("grey small cat");


// 11. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!')); 
// console.log(repeat('Ha!',2)); 
// console.log(repeat('Ha!',3));
// "Ha!" 
// "Ha!Ha!" 
// "Ha!Ha!Ha!"

String.prototype.repeat = function(n){
	var str = ""
	for(var i=1; i<=n; i++){
		str += this
	}
	console.log(str);
}
"ha".repeat(3);

// 12. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
function hum(num){
	if (typeof(num) == "undefined")
		return
	// if(num%100 >= 11 && num%100 <=13)
	// 	return num + "th"
	switch(num%100){
		case 1: return num + "st"
		case 2: return num + "nd"
		case 3: return num + "rd"
	}
	return num + "th"
}
hum(201);
hum(8);
hum(402);

// 13. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

function trunc(str, val){
	var newStr;
	if(str.length < val){
		newStr = str;
	}
	if (str.length > val){
		newStr = str.slice(0, val) + "..."
	}
	return newStr;
}
trunc("john small the greates", 10)





