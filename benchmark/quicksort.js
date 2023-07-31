/**
 * Quick sort of JS
 * @param {Array<number>} arr Array input
 */
function quicksort(arr) {
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  function _quicksort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      _quicksort(arr, low, pi - 1);
      _quicksort(arr, pi + 1, high);
    }
  }

  console.time("node quicksort");
  _quicksort(arr, 0, arr.length - 1);
  console.timeEnd("node quicksort");

  return arr;
}

module.exports = quicksort;
