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
  if (x == 0) {
    for (let i = 0; i < 3; i++) {
      if (y == 0) {
        for (let j = 0; j < 3; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 1) {
        for (let j = 3; j < 6; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 2) {
        for (let j = 6; j < 9; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
    }
  }
  if (x == 1) {
    for (let i = 3; i < 6; i++) {
      if (y == 0) {
        for (let j = 0; j < 3; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 1) {
        for (let j = 3; j < 6; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 2) {
        for (let j = 6; j < 9; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
    }
  }
  if (x == 2) {
    for (let i = 6; i < 9; i++) {
      if (y == 0) {
        for (let j = 0; j < 3; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 1) {
        for (let j = 3; j < 6; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
      if (y == 2) {
        for (let j = 6; j < 9; j++) {
          arr2[count] = arr[i][j];
          count++;
        }
      }
    }
  }

  return arr2;
}
[8, 9, 5, 7, 4, 2, 1, 3, 6];
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
  for (let i = 0; i < arr.length; i++) {
    if (!(JSON.stringify(getRow(arr, i)) === JSON.stringify(getRow(arr2, i)))) {
      return false;
    }
    if (
      !(
        JSON.stringify(getColumn(arr, i)) === JSON.stringify(getColumn(arr2, i))
      )
    ) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        !JSON.stringify(getSection(arr, i, j)) ===
        JSON.stringify(getSection(arr2, i, j))
      ) {
        return false;
      }
    }
  }
  return true;
}
console.log(isSame(puzzle, puzzleCopy));
