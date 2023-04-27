function getRow(arr, idx) {
  return arr[idx];
}
function getColumn(arr, idx) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i][idx];
  }
  return arr2;
}
function getSection(arr, x, y) {
  let arr2 = [];
  let count = 0;
  for (let i = 3 * x; i < 3 * x + 3; i++) {
    for (let j = 3 * y; j < 3 * y + 3; j++) {
      arr2[count] = arr[i][j];
      count++;
    }
  }
  return arr2;
}
function includes1to9(arr) {
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr2[i])) {
      arr3.push(arr2[i]);
    }
  }
  if (arr3.length == 9) {
    return true;
  }
  return false;
}
function sudokuIsValid(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!includes1to9(getRow(arr, i))) {
      return false;
      if (!includes1to9(getColumn(arr, i))) {
        return false;
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!includes1to9(getSection(arr, i, j))) {
        return false;
      }
    }
  }
  return true;
}
function isSame(arr, arr2) {
  if (arr.toString() == arr2.toString()) {
    return true;
  }
  return false;
}
