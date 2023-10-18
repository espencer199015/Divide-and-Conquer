function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Binary search to find the first occurrence of 0
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Count of zeroes is the remaining length of the array
  return arr.length - left;
}

module.exports = countZeroes;