/**
 * Write two functions that calculate the max and min sum of n consecutive numbers in an array.
 */
function maxSum(arr, size) {
  let maxVal = -Infinity; // the smallest value

  if (size > arr.length) return null;

  // stopping condition is count down the number to 'size' from the last value in array
  for (let i = 0; i <= arr.length - size; i++) {
    let subSum = 0; // reset subSum every new 'i'
    // j = i means start where to count index
    // stopping condition is add value of 'size' from i
    // because index start from 0, so use less than sign
    for (let j = i; j < size + i; j++) {
      subSum += arr[j];
    }

    if (subSum >= maxVal) maxVal = subSum;
  }

  return maxVal;
}

function maxSum1(arr, size) {
  if (size > arr.length) return null;

  let maxVal = 0;
  // calculate the first window
  for (let i = 0; i < size; i++) {
    maxVal += arr[i];
  }

  let tempVal = maxVal; // record the value of current window
  // j starts from the second window's first value
  for (let j = size; j <= arr.length; j++) {
    tempVal = tempVal + arr[j] - arr[j - size]; // add next window's last value and minus previous window's first value
    if (tempVal > maxVal) maxVal = tempVal;
  }

  return maxVal;
}

function minSum(arr, size) {
  let minVal = Infinity; // the biggest value

  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let subSum = 0;
    for (let j = i; j < size + i; j++) {
      subSum += arr[j];
    }

    if (subSum <= minVal) minVal = subSum;
  }

  return minVal;
}

console.log(maxSum1([2, 7, 3, 0, 6, 1, -5, -12, -11, 10, 20, -5, -2, 5], 3));
// console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 4));
