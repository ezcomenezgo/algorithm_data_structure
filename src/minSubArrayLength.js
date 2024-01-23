function minSubLength(arr, sum) {
  let left = 0,
    right = 1;
  let currentSum = arr[left] + arr[right];
  // use arr.length first, shouldn't do it because arr.length also might be the answer
  let result = Infinity;

  if (arr[left] >= sum) return result + 1;

  while (right < arr.length) {
    if (currentSum < sum) {
      right++;
      currentSum += arr[right];
    } else if (currentSum >= sum) {
      if (result > right - left + 1) result = right - left + 1;
      currentSum -= arr[left];
      left++;
    }
  }

  return result === Infinity ? 0 : result;
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 20], 30));
