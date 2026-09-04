/*
 * Question: Left Rotate an Array by One
 * Write a function that left rotates a given array by one position, moving the first element to the end.
 *
 * Examples:
 * Input: [1, 2, 3, 4]
 * Output: [ 2, 3, 4, 1 ]
 */

class a {
  leftRotate(arr) {
    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }

    arr[arr.length - 1] = temp;

    return arr;
  }
}

const m = new a();
const newArr = m.leftRotate([1, 2, 3, 4]);
console.log(newArr);
