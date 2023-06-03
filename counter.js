function intersection1(shortArr, longArr) {
  let insertArr = [];

  while (shortArr.length > 0) {
    if (shortArr[shortArr.length - 1] < longArr[longArr.length - 1]) {
      longArr.pop();
      console.log('long', longArr);
    } else if (shortArr[shortArr.length - 1] > longArr[longArr.length - 1]) {
      shortArr.pop();
      console.log('short', shortArr);
    } else if (shortArr[shortArr.length - 1] === longArr[longArr.length - 1]) {
      insertArr.push(shortArr[shortArr.length - 1]);
      shortArr.pop();
      longArr.pop();
      console.log('insert', insertArr);
    }
  }

  return console.log('result', insertArr);
}

// intersection1([3, 6, 8, 15, 16, 24], [3, 6, 8, 9, 11, 15]);

function intersection2(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2); // concat two arrays
  let counter = {}; // declare counter

  for (let i = 0; i <= arr3.length - 1; i++) {
    if (!counter[arr3[i]]) {
      // if the number in merged array not in counter
      counter[arr3[i]] = 1; // then sign up
    } else {
      // if it's already appeared
      counter[arr3[i]]++; // then plus one time
    }
  }

  for (const property in counter) {
    if (counter[property] >= 2) {
      // if the property's value in counter big than 2, it represents the two array have intersection
      result.push(property);
    }
  }

  console.log('counter', counter, 'result', result);
}

// intersection2([3, 6, 8, 15, 16, 24], [3, 6, 8, 9, 11, 15]);

function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) return console.log('false');

  let counter1 = {};
  let counter2 = {};
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let result = [];

  recordToCounter(arr1, counter1);
  recordToCounter(arr2, counter2);

  for (property in counter1) {
    if (counter1[property] !== counter2[property]) result.push('false');
    else result.push('true');
  }

  if (result.includes('false')) return console.log('false');
  else console.log('true');
}

function recordToCounter(arr, counter) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!counter[arr[i]]) counter[arr[i]] = 1;
    else counter[arr[i]]++;
  }
}

// sameFrequency('afajghaodf', 'jgiojgk;dgsd');
// sameFrequency('abbc', 'aabc');
// sameFrequency('abba', 'abab');
// sameFrequency('aasdebasdf', 'adfeebed');
