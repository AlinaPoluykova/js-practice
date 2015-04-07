
// 1. Write a JavaScript function to check whether an `input` is an array or not.

isArray = function(input) {  
	if (toString.call(input) === "[object Array]"){
		return true;
	}
	else {
		return false
	}
}
console.log(isArray('example String'));
console.log(isArray([1, 3, 5, 7]));

 // 2. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

firstElem =  function(array, n) {
	if (array == null) 
	{
		return cosole.log("There is no array")
	}
	else if(n == null)
	{
		return array[0];
	}
	else if(n < 0) {  
		return console.log("n is less than 0")
	}
	else
	{
		return console.log(array.slice(0, n));
	}
};
firstElem([-2,3,4,10], 3);
firstElem([-2,3,4,10, 21, 35], -1);

// 3. Write a simple JavaScript program to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"];

["Red", "Green", "White", "Black"].join(", ");

// 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function dash(inp){
	var inp = (window.prompt()).toString();
	var result = [inp[0]];
	console.log(result);
	for(var i=1; i < (inp.length-1); i++){
		if(inp[i]%2 == 0 && inp[i+1]%2 == 0){
			result.push("-", inp[i+1]);
		}
		else {
			result.push(inp[i+1]);
		}
	}
	console.log(result);
}
dash();

// 5.  Write a JavaScript program which takes an input as a first array, sorts it and returns the sorted array. 
function sorti(){
	var arr1 = window.prompt().split(",").join(", ").toString();
	console.log([arr1]);
	arr1 = JSON.parse("[" + arr1 + "]");
	var arr2 = arr1.sort();
	alert(arr2);
}

// 6. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times ) 
function freq(ar){
	ar = ar.sort();
	var item;
	var times = 1;
	var sum = 0;
	for(var i=0; i < ar.length; i++){
		for(var j=i; j < ar.length; j++){
			if(ar[i]=== ar[j]){
				sum++

			}
			if(times<sum){
				times = sum;
				item = ar[i];
			}
		}
		sum = 0;
	}
	console.log("times " + times + ", item: " + item);
}
freq([5, 6, 55, 7, 8, 23, 5, 21, 5]);

// 7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
function swap(){
	var str = window.prompt();
	var newStr = [];
	var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var LOWER = 'abcdefghijklmnopqrstuvwxyz';
	for(var i =0; i < str.length; i++){
		if(UPPER.indexOf(str[i]) !== -1){
			newStr.push(str[i].toLowerCase());
		} else if(LOWER.indexOf(str[i]) !== -1){
			newStr.push(str[i].toUpperCase());
		} else {
			newStr.push(str[i]);
		}
	}
	console.log(newStr.join(" "))
}
swap();

 // 8. Write a JavaScript program to compute the sum and product of an array of integers. 
 function count(ary){
 	var p = 1;
 	var s = 0;
 	for (var i=0; i<ary.length; i++){
 		s += ary[i];
 		p *= ary[i]
 	}
 	console.log("The sum is " + s + " , the product is " + p)
 }
count([2,3,5,7]);

// 9. Write a JavaScript program to remove duplicate items from an array.
function dupl(ar3){
	ar3 = ar3.sort(); 
	for (var i=0; i < ar3.length; i++){
		if(ar3[i] == ar3[i+1]){
			ar3.splice(i,1)
		}
	}
	alert(ar3);
}
dupl([2,3,3,5,6,7,6,2]);

// 10. We have the following arrays : Go to the editor
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

function colors(){
	var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
	var o = ["th","st","nd","rd"];
	var number = 0;
	var currentColor;
	var end;
	for(var i =0; i < color.length; i++){
	currentColor = color[i]

		if(currentColor == color[0])
		{
			end = o[1];
			number ++;
			alert(number + end + " color is " + currentColor + ".");
		}
		else if (currentColor == color[1]) {
			end = o[2]
			number ++;
			alert(number + end + " color is " + currentColor + ".");
		}
		else if(currentColor == color[3]){
			end = o[3]
			number ++;
			alert(number + end + " color is " + currentColor + ".");
		}
		else {
			end = o[0]
			number ++;
			alert(number + end + " color is " + currentColor + ".");
		}
	}

}
// 11. Find the leap years in a given range of years. 
function leap(a,b){
	var y = []
	var lep = []
	for(var i =a; i <= b; i++){
		y.push(i);
	}
		for(var n=0; n< y.length; n++){
			if((y[n]%4 ==0 && y[n]%100 !==0)|| (y[n]%4==0 && y[n]%100==0 && y[n]%400==0)){
				lep.push(y[n]);
		} 
	}
	console.log(lep);
}

// 12. Write a JavaScript program to shuffle an array. 

function shuffle(ar4){
	var cur = ar4.length, temp, ind;
	while(cur > 0){
		ind = Math.floor(Math.random()*cur)
		cur--;
		temp = ar4[cur];
		ar4[cur] = ar4[ind];
		ar4[ind] = temp
	}
	console.log(ar4)
}
shuffle(2,3,4,5);

// 13. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array : 
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output : 
// [4, 5, 8, 10, 12, 13]

function sums(arr1, arr2){
	var sumAr = [];
	for(var i = 0; i < arr1.length; i++){
		for(var j =0; j < arr2.length; j++){
			if(i === j){
				sumAr.push(arr1[i] + arr2[j])
			}
		}
	}
	console.log(sumAr)
}
sums([1,2,3,4,5],[2,3,4,5,6]);

// 14. Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(a1,a2){
	var newArray = [];
	var obj = {};
	for(var i = 0; i < a1.length; i++){
		obj[a1[i]] = a1[i];
	}
	for(var j=0; j< a2.length; j++){
		obj[a2[j]] = a2[j]
	}
	for (var n in obj){
		newArray.push(obj[n])
	}
	console.log(newArray);
}
union([1,2,3],[2,3,4,5]);


















