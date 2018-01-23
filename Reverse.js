/*

Write a function called ReveseString() that takes one argument You may assume that the argument is a string.
o Return the a string with all of the characters in reverse order.
o For example: the string "reverse" will return "esrever".
o What happens if null is passed in as an argument? How can we prevent problems caused by null or undefined?

*/

//function to accept String and reverse it
function ReverseString(textVar)
{


    if (textVar === null)
    {

        return "Error; a null value has been passed to the function. Please try again by passing a String."
    }

    else {

        //initializing an array to accept each character from the original String
        var textBack = "";

        
        var totLength = textVar.length;

        for (i = 0; i <= textVar.length; i++) {

            textBack += textVar.charAt((totLength));
            totLength--;

        }

        //return the array with the text reversed
        return textBack;
    }



}

console.log(ReverseString("reverse"));

console.log(ReverseString(null));