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

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);



// CONDITION
// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.

// SOLUTION
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);



// CONDITION
//Change the chained if/else if statements into a switch statement.

// SOLUTION
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;   
  }
  return answer;
}

chainToSwitch(7);



// CONDITION
// Counting Cards
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

// SOLUTION
function cc(card) {
   // Only change code below this line
   switch(card) {
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
       count++;
       break;
     case 10:
     case 'J':
     case 'Q':
     case 'K':
     case 'A':
       count--;
       break;  
   }
 
   let holdbet = 'Hold';
   if(count > 0) {
     holdbet = 'Bet';
   }
 
   return count + ' ' + holdbet;
   // Only change code above this line
 }
 
 cc(2); cc(3); cc(7); cc('K'); cc('A');