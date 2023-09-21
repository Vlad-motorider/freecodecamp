// CONDITION
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// SOLUTION
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();



// CONDITION
// There should be at least 5 sub-arrays in the list.

// SOLUTION
const myList = [["Chocolate Bar", 15],["cake", 16],["cookie", 20],["candies", 25],
["apple", 22]];



// CONDITION 
// Create a function called reusableFunction which prints the string Hi World to the dev console.
// Call the function.

// SOLUTION
function reusableFunction() {
   console.log("Hi World");
}
reusableFunction();



// CONDITION 
// Add the less than operator to the indicated lines so that the return statements make sense.

// SOLUTION
function testLessThan(val) {
   if (val < 25) {  // Change this line
      return "Under 25";
   }

   if (val < 55) {  // Change this line
      return "Under 55";
   }

   return "55 or Over";
}

testLessThan(10);