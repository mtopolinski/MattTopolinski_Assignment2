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
function DeepEqual(input1, input2) {


    //initial If statement to qualify variables if they're NOT both Objects
    if (input1.typeof != Object || input2.typeof != Object) {

        //If the variables are not objects, but either one is null, then return False
        if (input1 === null || input2 === null) {

            return false;
            console.log("Error; a null and/or null object has been used.");
        }

        //if the variables are NOT objects and are equal to each other then return True
        else if (input1 === input2) {
            return true;
        }

        //IF the variables are NOT Objects and are NOT equal, then return False
        else if (input1 != input2) {
            return false;
        }
    }


    //If the first variable passed is an Object but the second passed is not an Object then return False
    else if (input1.typeof = Object && input2.typeof != Object)
    {
        return false;
    }


    //If the first variable passed is not an Object but the second is then return False
    else if (input1.typeof != Object && input2.typeof == Object)
    {
        return false;
    }


    //IF both variables are Objects, then we'll need to examine the contents to determine if they're the same
    else if (input1.typeof == Object && input2.typeof == Object)
    {

    }


}

var test1 = "a";
var test2 = test1;
var test3 = 18;

console.log(DeepEqual(test1, test2));
console.log(DeepEqual(test1, test3));

