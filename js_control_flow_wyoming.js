// Wyoming Telford
// js_control_flow assignment - week 1

//reverse.js 

var inputString = "building"
var backwards = ""

for (var letters = 0; letters < inputString.length; letters++ ) {
	backwards = inputString[letters] + backwards
}
console.log(backwards);

//filterLongWords.js 

var words = ["ewok", "dwarf", "hobbit", "troll"];

for (var i = 0, maxLength = 6; i < words.length; i++) {
	if (words[i].length < maxLength) {
		console.log(words[i]);
	}
}

//grade.js

var grade = Math.round(Math.random*100);

 if (grade >= 90) {
        console.log("your grade is A");
    } 
    else if (grade >= 80) {
        console.log("your grade is B");
    }
    else if (grade >= 70) {
        console.log("your grade is C");
    }
    else if (grade >= 60) {
        console.log("your grade is D");
    }
    else {
        console.log("your grade is F");
    } 

   //pluralizer.js


function isPlural(thing, count) {
  //singular if less than one
	if (count < 2) {
		console.log("There is " + count + " " + thing + ".");
	}
  //plural else
	else {
		console.log("There are " + count + " " + thing + "s.");
  }
}
isPlural("Dementor", 5)
isPlural("Harry Potter", 1)

//tempConvert.js

var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + "°C is " + celsiusInF + "°F");
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + "°F is " + fahrenheitInC + "°C");






     

  




