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

        //array to hold the property contents of object1
        var input1Array = {};

        //array to hold the propery contents of object2
        var input2Array = {};

        //for loop to dump the contents of input1 into an array
        for (var inputs in input1) {

            input1Array += input1[inputs];
        }

        //for loop to dump the contents of input2 into an array
        for (var inputs in input2) {

            input2Array += input2[inputs];
        }


        //IF statement to check to see if the array lengths are NOT equal
        if (input1Array.length !== input2Array.length) {

            return false;
        }

        //IF statement to check to see if the array length are equal
        else if (input1Array.length === input2Array.length) {

            //if the array lengths are equal, we will run a for loop to compare the contents to each other
            for (var i = 0; i < input1Array.length; i++) {

                //if the contents are not equal, then the Objects are different
                if (input1Array[i] !== input2Array[i]) {

                    return false;
                }
            }

            //if everything else holds true, then the Objects must be equal
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

var d = {

    "1": "one",
    "2": "two",
    "3": "three"
}

var f = null;

console.log("This check should be 'true' ---> " + deepEqual(test1, test2));
console.log("This check should be 'false' ---> " + deepEqual(test1, test3));
console.log("This check should be 'true' ---> " + deepEqual(states1, states2));
console.log("This check should be 'false' ---> " + deepEqual(states1, states3));
console.log("This check should be 'false' ---> " + deepEqual(d, f));

console.log("\n\n");

var obj = {here: {is: "an"}, object: 2};
console.log("This check should be 'true' ---> " + deepEqual(obj, obj));
console.log("This check should be 'false' ---> " + deepEqual(obj, {here: 1, object: 2}));
console.log("This check should be 'true' ---> " + deepEqual(obj, {here: {is: "an"}, object: 2}));