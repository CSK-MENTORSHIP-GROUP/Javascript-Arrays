//------------------------------------ARRAYS-----------------------------------------
 //accessing array element
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
document.getElementById("trial").innerHTML = cars[0];


//replacing  an Array Element
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";


//Access the Full Array
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("trial").innerHTML = cars;

//Arrays as Objects

const person = ["John", "Doe", 46];
document.getElementById("trial").innerHTML = person[0];

//objects using names
const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("trial").innerHTML = person.firstName;

//length property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
document.getElementById("trial").innerHTML = length;

//Accessing the First Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
document.getElementById("trial").innerHTML = fruits[0];

//Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
document.getElementById("trial").innerHTML = fruits;

//Looping Array Elements using for
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;


//use of Array.forEach() function
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
  text += "<li>" + value + "</li>";
}

//Adding Array Elements using push()
//<button onclick="myFunction()">Try it</button>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push("Lemon");
    document.getElementById("trial").innerHTML = fruits;

}
// adding array using the length property:
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; 
document.getElementById("trial").innerHTML = fruits;

//Associative Arrays
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"


//             -------------ARRAY METHODS----------
//Converting Arrays to Strings -use toString()
//The toString() method returns an array as a comma separated string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//       .......join()........
//The join() method also joins all array elements into a string.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//output: Banana * Orange * Apple * Mango

//                                                            .......Popping and Pushing.......
//pop() method removes the last element from an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
document.getElementById("demo").innerHTML = fruits



//push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


//JavaScript Array shift()
//shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;
                // or
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 document.getElementById("demo1").innerHTML = fruits.shift();
document.getElementById("demo2").innerHTML = fruits;

//unshift()
// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo2").innerHTML = fruits;

//Changing Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";


//Array length -adding to the last element 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits[fruits.length] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;

// Array delete()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

//Merging (Concatenating) Arrays --use concat()
//Merging Two Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

//Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);


                   //Splicing and Slicing Arrays
//The splice() method adds new items to an array.
//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.

//Array splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");//at position 2 add 2 element
// Banana,Orange,Lemon,Kiwi,Apple,Mango

//splice() to Remove Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
//output : Orange,Apple,Mango

//Array slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);//include index1 and exclude index 3
//output :Orange,Lemon,Apple,Mango

//









































































































