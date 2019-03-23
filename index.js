// task  https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR1_BqZS2ys8ndXwJe-l3VNzA6cqrwwQcLxtDAn65IBRveKxs-NSzO2mQb8
// Write a function calculating circumference of a Circle.
function circleCircumference(circle) {
return circle = 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/525a5b2185a9a4f5670006c1
let myObj = {};
myObj.__proto__ = MyObject.prototype
MyObject.call(myObj)

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
//2 version
const isDivisible = (n,x,y) =>n%x==0 && n%y==0;
//2 version
function isDivisible(n,x,y) {
    return (n%x==0 && n%y==0) ? true:false;
}