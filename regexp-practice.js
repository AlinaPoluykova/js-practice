JavaScript regular expression

// 1. Write a JavaScript program to test the first character of a string is uppercase or not.

function upper(str){
	var regexp = /^[A-Z]/
	console.log(regexp.test(str));
}
upper("String with capital letter")
upper("string without capital letter")

 // 2. Write a JavaScript program to check a credit card number ( format 9999-9999-9999-9999 ).

function card(num){
	var car_num = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
	if(car_num.test(num)){
		console.log("valid number")
	}
	else {
		console.log("invalid card number")
	}
}
card("7880-7880-7880-2888")
card("7880-7880-7880-2")

// 3. Write a pattern that matches e-mail addresses. The personal information part contains the following ASCII characters.

function email(str){
	var email_correct = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if(email_correct.test(str)){
		console.log("valid email");
	} else {
		console.log("invalid email");
	}
}
email("me-info@example.com")
email("abcabc@")

// 4. Write a JavaScript program to search a date (format dd/dd/dddd) within a string. Go to the editor
// Sample string : "Albert Einstein was born in Ulm, on 14/03/1879."

function search(str){
	var dat_format = /(\d{2})\/(\d{2})\/(\d{4})/
	var date;
	if(str.match(dat_format)){
		date = str.match(dat_format)
		console.log("date found on teh string " + date)
	}
	else {
		console.log("there is no date in the string")
	}
}
search("Albert Einstein was born in Ulm, on 14/03/1879.")

// 5. Write a JavaScript program that work as a trim function (string) using regular expression. 

function trimo(str){
	var result = str.replace(/^\s+|\s+$/g, '');
	console.log(result);
}
trimo(' w3resource ')


// 6. Write a JavaScript program to count number of words in string. 
// Note : 
// - Remove white-space from start and end position. 
// - Convert 2 or more spaces to 1. 
// - Exclude newline with a start spacing.
function count(str){
	var string = str.replace(/^\s+|\s+$/gi, '').replace(/[ ]{2,}/gi, " ").replace(/\n /, '\n');
	console.log(string.length);
}

count(" john     small ")









