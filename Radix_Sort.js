// RADIX SORT
// Radix Sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number

// The amount of buckets depends on the base of the numbers.
// Base 10 has 10 buckets, base 7 has 7 buckets.

// You split up the numbers based on how many digits the largest number has
// For example: 4579 is the largest number is an array, then it will take 4 iterations to sort the entire array.

//// Radix Sort Helpers

// Returns the digit you need at a specific index
// Starting from the right side
function getDigit(num, i) {
  console.log(Math.floor(Math.abs(num) / Math.pow(10, i)) % 10);
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Returns how many times you need to run this code
// This will show how many iteration it will go through
function digitCount(num) {
  if (num === 0) return 1;
  console.log(Math.floor(Math.log10(Math.abs(num))) + 1);
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, it Returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; 0 < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    console.log(maxDigits);
  }
  return maxDigits;
}

function radixSort(nums) {
  // Step 1. Find out how many digitd the max number has
  var maxDigitCount = mostDigits(nums);
  console.log(maxDigitCount);

  // Step 2. Iterate the amount of digits in the max number
  for (let k = 0; k < maxDigitCount; k++) {
    // Step 3. Create 10 buckets of arrays all incapsulated within an array to hold numbers while sorting
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Step 4. Iterate through the entire nums array at the k index
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);

    // Step 5. Concat the buckets in Digit Buckets into one big array.
    // Spread operator takes the numbers out of the array and into the format you want.
    // ie: ([1], [2]) --> (1, 2)
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }

  return nums;
}
