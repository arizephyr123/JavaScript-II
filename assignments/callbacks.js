// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

// GIVEN THIS PROBLEM:

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
// }

// // SOLUTION:

// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }

// // NOTES ON THE SOLUTION:

// // firstItem is a higher order function.
// // It expects a callback (referred to as `cb`) as its second argument.
// // To test our solution, we will use the given `items` array and a variety of callbacks.
// // Note how callbacks can be declared separately, or inlined.

// // TEST 1 (inlined callback):

// firstItem(items, item => console.log(`I love my ${item}!`));
// // "I love my Pencil!"

// // TEST 2 (declaring callback before hand):

// function logExorbitantPrice(article) {
//   console.log(`this ${article} is worth a million dollars!`);
// };

// firstItem(items, logExorbitantPrice);
// // "this Pencil is worth a million dollars!"

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
const length = function(arr) {
  return arr.length;
};
console.log(getLength(items, length));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
const lastObj = function(arr) {
  return arr[arr.length - 1];
};
console.log(last(items, lastObj));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
const sum = function(x, y) {
  return x + y;
};
console.log(sumNums(3, 4, sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
const product = (x, y) => x * y;

console.log(multiplyNums(5, 5, product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const isPresent = function(item, list) {
  if (list.includes(item)) {
    console.log(`${item} is present`);
    return true;
  }else {
    console.log(`${item} is NOT present`);
  }
};

console.log(contains("yo-yo", items, isPresent));
console.log(contains("banana", items, isPresent));

//alternative solution with help from husband//
function contains1(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(`Checking for item ${item} :`);
  cb(item, list.includes(item))
}

const isPresent1 = function( pass1) {
  console.log('Item is :' ) 
  pass1 ? console.log ('present.') : console.log ('not present.')
};

console.log(contains1("yo-yo", items, isPresent1));
console.log(contains1("banana", items, isPresent1));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
}
