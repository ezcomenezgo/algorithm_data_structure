function averagePair(arr, num) {
  let doubledNum = num * 2;
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    let target = doubledNum - arr[i];

    if (arr.includes(target)) {
      result.push(arr[i], target);
      arr = arr.filter((num) => num !== target); // filter the target to avoid duplicated search
    }
  }

  return result;
}

function averagePair2(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === num) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

function pointer(arr, num) {
  let max = arr.length - 1;
  let result = [];

  for (let i = 0; i <= max; i++) {
    console.log('for', i, max);
    if ((arr[i] + arr[max]) / 2 > num) {
      console.log('>', arr[i], arr[max]);
      max--;
    } else if ((arr[i] + arr[max]) / 2 < num) {
      console.log('<', arr[i], arr[max]);
      continue;
    } else {
      console.log('=', arr[i], arr[max]);
      result.push([arr[i], arr[max]]);
      max--;
    }
  }

  return result;
}

function pointer2(arr, num) {
  let max = arr.length - 1;
  let min = 0;
  let result = [];

  while (min < max) {
    let avg = (arr[min] + arr[max]) / 2;
    if (avg > num) {
      console.log('>', arr[min], arr[max]);
      max--;
    } else if (avg < num) {
      console.log('<', arr[min], arr[max]);
      min++;
    } else {
      console.log('=', arr[min], arr[max]);
      result.push([arr[min], arr[max]]);
      min++;
      max--;
    }
  }

  return result;
}

// console.log('averagePair', pointer2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));

function isPalindrome(str) {
  let min = 0;
  let max = str.length - 1;

  while (min < max) {
    if (str[min] !== str[max]) {
      return false;
    } else if (str[min] === str[max]) {
      min++;
      max--;
    }
  }

  return true;
}

console.log('isPalindrome', isPalindrome('amanaplanacanalpanama'));

function isSubsequence(newStr, originStr) {
  if (newStr.length === 0) return true;

  let i = 0; // set the index for newStr
  let j = 0; // set the index for originStr

  // if any of string finished, then end the loop
  while (i <= newStr.length - 1 && j <= originStr.length - 1) {
    // original string's index has to be increased every time
    if (newStr[i] !== originStr[j]) {
      j++;
      // new string's index only be increased when paired successfully
    } else if (newStr[i] === originStr[j]) {
      i++;
      j++;
    }
  }

  // after while loop
  if (i === newStr.length) {
    // if new string's index is at the last position
    // then represent new string is the subsequence of original string
    return true;
  } else if (i !== newStr.length && j === originStr.length) {
    // if new string's index isn't at the last position but original string is finished
    // then represent new string is not the subsequence of original string
    return false;
  }

  return 'none';
}

// v2
function isSubsequence2(newStr, originStr) {
  if (newStr.length === 0) return true;

  let i = 0;
  let j = 0;

  while (i <= newStr.length - 1 && j <= originStr.length - 1) {
    if (newStr[i] === originStr[j]) i++;
    j++;
  }

  if (i === newStr.length) return true;
  else if (i !== newStr.length && j === originStr.length) return false;

  return 'none';
}

// teacher's solution
function isSubsequence3(newStr, originStr) {
  if (newStr.length === 0) return true;

  let i = 0;
  let j = 0;

  while (j < originStr.length) {
    if (newStr[i] === originStr[j]) i++;

    if (i >= newStr.length) return true;

    j++;
  }

  return false;
}

console.log('isSubsequence', isSubsequence2('abc', 'bca'));
