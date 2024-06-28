// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
  return a + b;
}

let result = calculateSum(5, 10);
console.log(result);

//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(number) {
  return number % 2 === 0;
}

// Example usage:
let checkEven = isEven(4);
console.log(checkEven);

checkEven = isEven(7);
console.log(checkEven);

//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("The array is empty");
  }

  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

let array = [3, 5, 7, 12, 2, 8, 1];
let maxNumber = findMax(array);
console.log(maxNumber);

//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
let originalString = "understand";
let reversedString = reverseString(originalString);
console.log(reversedString);

//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 26];
let oddNumbers = filterOddNumbers(arrayOne);
console.log(oddNumbers);

//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr) {
  return arr.reduce((sum, number) => sum + number, 0);
}

// Example usage:
let arrayTwo = [1, 2, 3, 4, 5, 6, 7];
let totalSum = sumArray(arrayTwo);
console.log(totalSum);

//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

let arrayThree = [5, 3, 8, 1, 2];
let sortedArray = sortArray(arrayThree);
console.log(sortedArray);

//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));
