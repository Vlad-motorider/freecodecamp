// CONDITION
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// SOLUTION
const myArray = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray = myArray.shift();

// CONDITION
// There should be at least 5 sub-arrays in the list.

// SOLUTION
const myList = [
  ["Chocolate Bar", 15],
  ["cake", 16],
  ["cookie", 20],
  ["candies", 25],
  ["apple", 22],
];

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
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// CONDITION
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

// SOLUTION
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// CONDITION
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

// SOLUTION
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);



// CONDITION
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

// SOLUTION
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);