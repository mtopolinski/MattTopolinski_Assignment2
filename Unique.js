/*

Create a JavaScript file called Unique.js that will do the following.
 Write a function called IsUnique() that takes an array as an argument You may assume that the array has only strings.
o Return true is every element in the array is unique.
o Return false is two or more elements are the same.

 */

function isUnique(strArray)
{

    var totLength = strArray.length;
    var counter = 0;

    for (i = 0; i < strArray.length; i++)
    {
        for (j = 0; j < totLength; j++)
        {
            if (strArray[i] === totLength[j])
            {
                counter++
            }
        }

        if (counter > 1)
        {
            return false;
    }}

    else
    {
        return true;
    }

}
