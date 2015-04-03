 // 1. Write a JavaScript program that accept two integers and display the larger.

function bigger(a,b){
	if (a >b) {
		alert(a)
	}
	if(b>a) {
		alert(b)
	}
	else {
		alert("The numbers are equal")
	}
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function sign(a,b,c){
	if(a>0 && b>0 && c>0){
		alert("The sign of production is +")
	}
	else if(a>0 && b<0 && c<0){
		alert("The sign of production is +")
	}
	else if(a<0 && b<0 && c>0){
		alert("The sign of production is +")
	}
	else if(a<0 && b>0 && c<0){
		alert("The sign of production is +")
	}
	else {
		alert("The sign of production is - ")}
}
sign(2,-3,4);

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Sample numbers : 0, -1, 4 Output : 4, 0, -1 
function sorti(x,y,z){
	if(x>z && y>z){
		if(x>y){
			alert(x + "," + y + ","  + z);
		}
		else {
			alert(y + "," + x + "," + z)
		}
	}
	else if(x>z && y<z)
	{
		alert(x + "," + y + "," + z)
	}
	else if(x<z && y<z){
		if(x>y){
			alert(z + "," + x + "," + y)
		}
		else{
			alert(z + "," + y + "," + x)
		}
	}
	else if(x<z && y>z){
		alert(y + "," + z +","+ x)
	}
}
sorti(1,-2,3);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor 
// Sample numbers : -5, -2, -6, 0, -1 
// Output : 0 
function large(a,b,c,d,e){
	if(a>b && a>c && a>d && a>е){
		alert(a);
	}
	else if(b>a && b>c && b>d && b>e){
		alert(b);
	}
	else if(c>a && c>b && c>d && c>e){
		alert(c)
	}
	else if(d>a && d>b && d>c && d>e){
		alert(d)
	}
	else if(e>a && e>b && e>c && e>d){
		alert(e)
	}
}
large(2,3,5,-10,11);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor 
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
function od_ev(){
	for(var i=0; i<=15; i++){
		if(i%2===0){
			console.log(i + " is even")
		}
		else {
			console.log(i + " is odd")
		}
	}
}

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100-A

function mark(){
	var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
	var allMarks = 0;
	for (var i = 0; i < students.length; i++) {
		allMarks += students[i][1]
		avgmark = allMarks/students.length;
	};
	alert("Average mark is " + avgmark);
	if(avgmark < 60){
		alert("Mark is F")
	}
	else if(avgmark < 70){
		alert("Mark is D")
	}
	else if(avgmark < 80){
		alert("Mark is C")
	}
	else if(avgmark < 90){
		alert("Mark is B")
	}
	else if(avgmark < 100){
		alert("Mark is A")
	}
}

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function bz(){
	for(var i=0; i<=100; i++){
		if(i%3 === 0){
			console.log("Fizz")
		}
		else if(i%5===0){
			console.log("Buzz")
		}
		else {
			console.log(i);
		}
	}
}

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. 
function star(){
	for(var i=1; i<=6; i++){
		for(var n=1; n<=i, n++){
			st="";
			st = st+("*")
		}
	}
	console.log(st)
}

// 8. Write a JavaScript program to construct the following pattern, using a nested for loop.
var i,n,st;
st=""
for(i=1; i<= 6; i++){
	st = st+("*");
	console.log(st);
}

// 9. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
var m =21, n=7, div;
while(m!=n){
	if(m>n){
		m = m - n;
	}
	else {
		n = n - m;
	}
	div = m;
}
console.log(div);

// 10. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sums = 0;
for(var i=0; i<1000; i++){
	if(i%3 ===0 || i%5 ===0){
		sums += i;
	}
}
console.log(sums);















