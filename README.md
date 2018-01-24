# MattTopolinski_Assignment2
CIS-385 Assignment 2



Reverse.js is a Javascript file that takes one argument (assuming that it ist a string).
o Returns the a string with all of the characters in reverse order.
o For example: the string "reverse" will return "esrever".
o It will throw an error message if a null is passed.

Unique.js is a Javascript file that takes an array as an argument (assuming the array has only strings).
o Returns true is every element in the array is unique.
o Returns false is two or more elements are the same.

DeepEqual.js is a Javascript file that will do the following.
This problem is found in Chapter 4 of Eloquent JavaScript. Hints can be found on the website version here:

http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
