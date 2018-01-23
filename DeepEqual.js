/*

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal
when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


 */

function DeepEqual(input1, input2) {

    if (input1.typeof != Object || input2.typeof != Object) {
        if (input1 === null || input2 === null) {
            return "Error; a null and/or null object has been used.";
        }

        else if (input1 === input2) {
            return true;
        }

        else if (input1 != input2) {
            return false;
        }
    }


}

var test1 = "a";
var test2 = test1;
var test3 = 18;

console.log(DeepEqual(test1, test2));
console.log(DeepEqual(test1, test3));

