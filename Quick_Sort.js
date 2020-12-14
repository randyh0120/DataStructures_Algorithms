function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIdx = start;

  function swap(array, i, j) {
    var temp = array[i];
    arr[i] = array[j];
    arr[j] = temp;
  }

  for (var i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // Left Side
    quickSort(arr, left, pivotIndex - 1);

    // Right Side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
