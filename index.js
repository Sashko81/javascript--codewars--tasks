// task  https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR1_BqZS2ys8ndXwJe-l3VNzA6cqrwwQcLxtDAn65IBRveKxs-NSzO2mQb8
// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.
// Write a function calculating circumference of a Circle.
// Tests round answers to 6 decimal places.
function circleCircumference(circle) {
return circle = 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/525a5b2185a9a4f5670006c1
// The new operator in JavaScript creates objects by following these three steps:

// First, it creates a new empty object. (Already done for you here.)
// Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
// Finally, the operator invokes the function and passes the new object as the “this” reference.

// Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".
// Note: Currently there is no way to prevent you from passing this kata just by typing "var myObj = new MyObject();". However, I will scrunch my eyebrows when I see your solution and make quiet remarks to myself about how you don't understand what this kata is trying to teach you.
// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.
var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
MyObject.call(myObj);

//https://www.codewars.com/kata/571f1eb77e8954a812000837
// Give you a function ```animal```, accept 1 parameter:```obj``` like this:
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//https://www.codewars.com/kata/highest-and-lowest/solutions/javascript
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//https://www.codewars.com/kata/5545f109004975ea66000086
//Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible (n,x,y) {
    return (n%x)+(n%y)==0;
}
//version 2
const isDivisible = (n,x,y) =>n%x==0 && n%y==0;
//version 3
function isDivisible(n,x,y) {
    return (n%x==0 && n%y==0) ? true:false;
}

//https://www.codewars.com/kata/523b4ff7adca849afe000035
//Make a simple function called greet that returns the most-famous "hello world!".
function greet() {
    return "hello world!";
    }
//https://www.codewars.com/kata/multiply/javascript
multiply = function (a, b) {
  return a * b;
}
//version 2
multiply = (a, b) => a * b;
