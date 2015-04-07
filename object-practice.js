// 1. Write a JavaScript program to list the properties of a JavaScript object.
function keys(obj){
	var key = [];
	for(var n in obj){
		key.push(n)
	}
	console.log(key);
}
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
keys(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object : 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
function del(student){
  console.log(student);
  delete student.rollno;
  console.log(student);
}
del(student);

// 3. Write a JavaScript program to get the length of an JavaScript object.
var cat = {name: "Kitty", color: "white", type: "Persian"}
function len(object){
	num = 0;
	for(n in object){
		if(object.hasOwnProperty(n)){
			num++
		}

	}
	console.log(num);
}
len(cat);

 // 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
      readingStatus: false
   }];

function read(obj){
	for(k in obj){
		if(obj[k].readingStatus){
			console.log("You have read " + obj[k].title)
		}
		else {
			console.log("You have not read " + obj[k].title)
		}
	}
}
read(library);

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

function Cyl(h,r){
	this.h = h;
	this.r = r;
}
Cyl.prototype.vol = function(){
	var volume;
	volume = this.h * this.r * this.r * Math.PI;
	console.log(volume)
}

var c = new Cyl(5,3);

// 6. Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified
// For example:
// console.log('hello'.repeatify(3));
// Should print hellohellohello
String.prototype.repeatify = function(val){
	var str = ""
	for(var i = 0; i < val; i++){
		str += this
	}
	console.log(str);
}
"hello".repeatify(3);









