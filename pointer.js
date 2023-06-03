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

console.log('averagePair', pointer2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
