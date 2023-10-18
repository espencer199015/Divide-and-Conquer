function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // If the array is already sorted
    if (arr[left] <= arr[right]) return left;

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid + arr.length - 1) % arr.length;

    // Check if mid is the minimum element
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    }

    if (arr[mid] <= arr[right]) {
      right = mid - 1;
    } else if (arr[mid] >= arr[left]) {
      left = mid + 1;
    }
  }

  return -1; // Shouldn't reach here
}

module.exports = findRotationCount;