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


//create the function to pass two objects/variables
function deepEqual(input1, input2) {

    //If the variables are not objects, but either one is null, then return False
    if (input1 === null || input2 === null) {

        console.log("Error; a null and/or null object has been used.");
        return false;

    }

    //initial If statement to qualify variables if they're NOT both Objects
    else if (input1.constructor !== Object || input2.constructor !== Object) {


        //if the variables are NOT objects and are equal to each other then return True
        if (input1 === input2) {
            return true;
        }

        //IF the variables are NOT Objects and are NOT equal, then return False
        else if (input1 !== input2) {
            return false;
        }
    }


    //If the first variable passed is an Object but the second passed is not an Object then return False
    else if (input1.constructor === Object && input2.constructor !== Object) {
        return false;
    }


    //If the first variable passed is not an Object but the second is then return False
    else if (input1.constructor !== Object && input2.constructor === Object) {
        return false;
    }


    //IF both variables are Objects, then we'll need to examine the contents to determine if they're the same
    else if (input1.constructor === Object && input2.constructor === Object) {

        var input1Array = {};
        var input2Array = {};

        for (var inputs in input1) {

            input1Array += input1[inputs];
        }

        for (var inputs in input2) {

            input2Array += input2[inputs];
        }


        // If number of properties is different,
        // objects are not equivalent
        if (input1Array.length !== input2Array.length) {

            return false;
        }

        else if (input1Array.length === input2Array.legnth) {

            for (var i = 0; i < input1Array.length; i++) {
                // If values of same property are not equal,
                // objects are not equivalent
                if (input1Array[i] !== input2Array[i]) {
                    return false;
                }
            }
        }

        else {
            // If we made it this far, objects
            // are considered equivalent

            return true;
        }

    }

}

var test1 = "a";
var test2 = test1;
var test3 = 18;
var states1 = {

    "IL": "Illinois",
    "IN": "Indiana",
    "MI": "Michigan"
}
var states2 = {

    "IL": "Illinois",
    "IN": "Indiana",
    "MI": "Michigan"
}

var states3 = {

    "IL": "Illinois",
    "IN": "Indiana",
    "NY": "New York"
}

var d = new Object();
var e = new Object();
var f = null;

console.log(deepEqual(test1, test2));
// → true
console.log(deepEqual(test1, test3));
// → false
console.log(deepEqual(states1, states2));
// → true
console.log(deepEqual(states1, states3));
// → false
console.log(deepEqual(d, e));
// → true
console.log(deepEqual(d, f));
// → false
console.log("\n\n");

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true