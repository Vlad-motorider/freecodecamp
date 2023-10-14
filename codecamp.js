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



// CONDITION
//Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// SOLUTION
// Setup
const testObj = {
   "an entree": "hamburger",
   "my side": "veggies",
   "the drink": "water"
 };
 
 // Only change code below this line
 const entreeValue = testObj['an entree'];   // Change this line
 const drinkValue = testObj['the drink'];    // Change this line



 // CONDITION
 //Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// SOLUTION
function phoneticLookup(val) {
   let result = "";
 
   const lookup = {
     'alpha': "Adams",
     'bravo': "Boston",
     'charlie': "Chicago",
     'delta': "Denver",
     'echo': "Easy",
     'foxtrot': "Frank"
   }

   result = lookup[val];
 
   return result;
 }
 
 phoneticLookup("charlie");



 // CONDITION
 //Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

 // SOLUTION
 function checkObj(obj, checkProp) {
   // Only change code below this line
   if(obj.hasOwnProperty(checkProp)) {
     return obj[checkProp];
   } else {
     return "Not Found";
   }
   
   // Only change code above this line
 }



// CONDITION
// Record Collection
// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
// Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

// SOLUTION
const recordCollection = {
   2548: {
     albumTitle: 'Slippery When Wet',
     artist: 'Bon Jovi',
     tracks: ['Let It Rock', 'You Give Love a Bad Name']
   },
   2468: {
     albumTitle: '1999',
     artist: 'Prince',
     tracks: ['1999', 'Little Red Corvette']
   },
   1245: {
     artist: 'Robert Palmer',
     tracks: []
   },
   5439: {
     albumTitle: 'ABBA Gold'
   }
 };
 

 function updateRecords(records, id, prop, value) {
   if (prop !== 'tracks' && value !== "") {
     records[id][prop] = value
   } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
     records[id][prop] = [value]
   } else if (prop === 'tracks' && value !== "") {
     records[id][prop].push(value)
   } else if (value === "") {
     delete records[id][prop]
   }
   return records;
 }
 updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// CONDITION
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

// SOLUTION
function multiplyAll(arr) {
   let product = 1;
   // Only change code below this line
   for(let i = 0; i < arr.length; i++) {
     for(let j = 0; j < arr[i].length; j++) {
       product = product * arr[i][j];
     }
   }
   // Only change code above this line
   return product;
 }
 
 multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// CONDITION
// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
// If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
// Your function must use recursion by calling itself and must not use loops of any kind.

// SOLUTION
// Only change code below this line
function countdown(n){
   if(n < 1) {
      return [];
   } else {
      let arrNum = countdown(n - 1);
      arrNum.unshift(n)
      return arrNum;
   }
}
 // Only change code above this line



// CONDITION
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. 
// You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

// SOLUTION
function freezeObj() {
   const MATH_CONSTANTS = {
      PI: 3.14
   };
   // Only change code below this line

   
   // Only change code above this line
   try {
      Object.freeze(MATH_CONSTANS);
      MATH_CONSTANTS.PI = 99;
   } catch(ex) {
      console.log(ex);
   }
   return MATH_CONSTANTS.PI;
}
const PI = freezeObj();



// CONDITION
// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). 
// removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// SOLUTION
function removeFirstTwo(list) {
   const [,,...args] = list;
   return args;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);