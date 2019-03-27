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

// Palindrome
// palindrome - a word, a sentence, or a sequence of characters, which is exactly the same as in the usual direction, and in the reverse. For example, "Anna" is a palindrome, and "table" and "John" are not.
// Setting
// This line; you need to write a function that returns true if the string is a palindrome and false - if not. It should take into account the gaps and punctuation marks.
// palindrome ('racecar') === true
// palindrome ('table') === false
// Disassemble the task
// The basic idea here is to draw the line in the opposite direction. If the "reverse" line is completely identical to the output, then we got the palindrome and the function should return true. If not - false.
// Decision
// Here is a code that allows you to solve a palindrome.
const palindrome = str => {
// turn the string to lowercase
str = str.toLowerCase ()
// reverse input string and return the result of the
// comparisong
return str === str.split ('') reverse (). join ('')
}
// The first step is to convert the characters of the input line to lowercase. This is a guarantee that the program will compare exactly the characters themselves, not the register or something else.
// The second step is the reverse of the line. It's easy to do this: you need to convert it into an array using the .split () (String library) method. We then rotate the array using the .reverse () (Array library). The last step is to convert a reciprocal array into a string using .join () (Array library).
// Now everything you need is to compare the "reverse" line from the original, returning the result to true or false.

// FizzBuzz
// One of the most popular on job interviews.
// setting
// It is necessary to write a function that outputs a number from 1 to n in the console, where n is an integer that the function accepts as a parameter, with the following conditions:
// output fizz instead of numbers, multiple 3;
// output buzz instead of numbers, multiple 5;
// output fizzbuzz instead of numbers multiples of 3 and 5.
// Example
// Fizzbuzz (5)
// Result
// 1
// 2
// fizz
// 4
// buzz
// Disassemble the task
// The main thing here is to search multiple numbers using JavaScript. It can be implemented using the module operator or the remainder -%, which allows you to show the balance when dividing two numbers. If the remainder is 0, this means that the first number is multiple of the second.
// 12% 5 // 2 -> 12 is not a multiple of 5
// 12% 3 // 0 -> 12 is multiple of 3
// So, if we divide 12 by 5, we get 2 with the remainder of 2. If you divide by 12 by 3, then we get 4 with the remnant 0. In the first case, 12 is not multiple 5, in the second case 12 times 3.
// Decision
// The optimal solution will be the following code:
const fizzBuzz = num => {
  for (let i = 1; i <= num; i ++) {
// check if the number is a multiple of 3 and 5
    if (i% 3 === 0 && i% 5 === 0) {
  console.log ('fizzbuzz')
    } else if (i% 3 === 0) { // check if the number is a multiple of 3
  console.log ('fizz')
    } else if (i% 5 === 0) { // check if the number is a multiple of 5
  console.log ('buzz')
    } else {
  console.log (i)
    }
  }
}
// The function performs the necessary checks with the use of conditional operators and produces the result required by the user. The task should pay attention to the order of the operators if ... else: start with the double condition (&&) and end with the case when multiple numbers were not found. As a result, we cover all options.

// Anagram
// So is the word that contains all the letters of another word in the same quantity, but in a different order.
// Setting
// You need to write a function that checks if there are two lines of anagrams, and the case of letters does not matter. Only characters are taken into account; gaps or punctuation marks are not taken into account.
// anagram ('finder', 'friend') -> true
// anagram ('hello', 'bye') -> false
// Disassemble the task
// It is important here to consider that it is necessary to check every letter in the two input lines and their number in each line.
// finder -> f: 1 friend -> f: 1
// i: 1 r: 1
// n: 1 i: 1
// d: 1 e: 1
// e: 1 n: 1
// r: 1 d: 1
// To store anagram data, it is worthwhile to choose a structure such as the object literal JavaScript. The key in this case is the character of the letter, and the value is the number of its repetitions in the current line.
// There are other conditions:
// It is necessary to make sure that the case of letters in the comparison is not taken into account. Simply convert both lines to the bottom or upper case.
// We exclude all non-symbols from the comparison. It is best to work with regular expressions.
// Decision
// helper function that builds the
// object to store the data
const buildCharObject = str => {
const charObj = {}
  for (let char of str.replace (/ [^ \ w] / g) .toLowerCase ()) {
// if the object has already a key value pair
// equal to the value being looped over
// increase the value by 1, otherwise add
// the letter is looped over the key and 1 as its value
charObj [char] = charObj [char] + 1 || 1
}
  return charObj
}
// main function
const anagram = (strA, strB) => {
// build the object that holds strA data
const aCharObject = buildCharObject (strA)
// build the object that holds strB data
const bCharObject = buildCharObject (strB)
// compare the number of keys in the two objects
// (anagram must have the same number of letters)
  if (Object.keys (aCharObject) .length! == Object.keys (bCharObject) .length) {
  return false
  }
// if both objects have the same number of keys
// we can be sure that at least both strings
// have the same number of characters
// now we can compare the two objects to see if both
// have the same letters in the same amount
  for (let char in aCharObject) {
    if (aCharObject [char]! == bCharObject [char]) {
      return false
    }
  }
// if both the above checks succeed,
// you have an anagram: return true
  return true
}
// Note the use of Object.keys () in the snippet above. This method returns an array containing names or keys in the same order in which they occur in the object. In this case, the array will be:
// ['f', 'i', 'n', 'd', 'e', 'r']
// Thus, we obtain the properties of an object without having to perform a volumetric cycle. In the task, you can use this method with the .length property - to check if there are the same number of characters in both rows, this is an important feature of the anagrams.

// Search for vowels
// Quite a simple task that often happens on interviews.
// Setting
// It is necessary to write a function, the accept string as an argument and return the number of vowels,
// Voices are a, e, i, o, u.
// Example:
// findVowels ('hello') // -> 2
// findVowels ('why') // -> 0
// Decision
// Here's the easiest option:
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', ​​'i', 'o', 'u']
  for (let char of str.toLowerCase ()) {
    if (vowels.includes (char)) {
      count ++
    }
  }
  return count
}
// It is important to pay attention to using the .includes () method. It is available for both rows and arrays. It should be used to determine if the array contains a certain value. This method returns true if the array contains the specified value and false, if not.
// There is also a shorter solution to the problem:
const findVowels = str => {
  const match = str.match (/ [aeiou] / gi)
  return match matches.length: 0
}
// Here is the .match () method, which allows you to implement an effective search. If the regular expression as the method argument is found inside the specified string, then the returned value becomes an array of matching characters. Well, if there are no matches, .match () returns null.

// Fibonacci
// A classical task that can be found at interviews of the very different levels. It is worth recalling that the Fibonacci sequence is a series of numbers, each of which is the sum of the two previous ones. Thus, the first ten numbers are as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Setting
// It is necessary to write a function that returns the n-th record in a certain sequence, and n is the number that takes as a function argument.
// Fibonacci (3) // -> 2
// This task includes the cycle through the number of times specified in the argument, returning the value to the corresponding position. This method of statement assignment requires the use of cycles. If you use recursion instead, it may appeal to the interviewer and give you some extra points.
// Decision
const Fibonacci = num => {
// store the Fibonacci sequence you're going to
// to generate inside an array and
// initialize the array with the first two
// numbers of the sequence
  const result = [0, 1]
  for (let i = 2; i <= num; i ++) {
// push the sum of the two numbers
// preceding the position of i in the result array
// at the end of the result array
  const prevNum1 = result [i-1]
  const prevNum2 = result [i-2]
  result.push (prevNum1 + prevNum2)
  }
// return the last value in the result array
  return result [num]
}
// In the array of results, the first two numbers are contained in a row, since each record in the sequence consists of the sum of the two preceding numbers. At the very beginning of the two numbers that can be taken to get the next number is not, so the loop can not generate them in automatic mode. But as we know, the first two numbers are always 0 and 1. Therefore, you can manually format the result array.
// As for recursion, it's all easier and more difficult at the same time:
const Fibonacci = num => {
// if num is either 0 or 1 return num
  if (num <2) {
    return num
    }
// recursion here
  return Fibonacci num - 1 + Fibonacci num (2)
  }
// We continue to call Fibonacci () by passing less numbers as arguments. Stop in the case when the passed argument is 0 or 1.

