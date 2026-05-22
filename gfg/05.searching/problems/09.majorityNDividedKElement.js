// More than n/k Occurrences

// Given an array arr and an element k. The task is to find the count of elements in the array that appear more than n/k times and n is length of arr.

// Examples :

// Input: arr = [3, 1, 2, 2, 1, 2, 3, 3], k = 4
// Output: 2
// Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times.
// Input: arr = [2, 3, 3, 2], k = 3
// Output: 2
// Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times. So the count of elements are 2.
// Input: arr = [1, 4, 7, 7], k = 2
// Output: 0
// Explanation: In the given array, no element appears more than n/k times.
// Constraints:
// 1 <= arr.size() <= 106
// 0 <= arr[i] <= 108
// 1 <= k <= arr.size()

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

////// Hints to solve "More than n/k Occurrences" in similar fashion:

// Key Insight: At most k-1 elements can appear more than n/k times.

// Example: If k=4 and n=8, at most 3 elements can appear > 2 times
// Why? If 4 or more elements each appeared > 2 times, we'd exceed 8 total elements
// Phase 1 - Find Candidates:

// Maintain a map of at most k-1 candidates with their vote counts
// For each element in the array:
// If it's already a candidate, increment its vote count
// If it's not a candidate and we have fewer than k-1 candidates, add it
// If it's not a candidate and we already have k-1 candidates, decrement all counts (cancel out votes)
// Elements with 0 votes are removed from candidates
// Phase 2 - Verify Candidates:

// Count actual occurrences of each remaining candidate
// Check which ones appear strictly more than n/k times
// Return the count
// Same pattern as majority element:

// Phase 1: Find candidates (voting mechanism)
// Phase 2: Verify and count actual occurrences
// No extra space beyond k-1 variables

function majorityNbyKelElements(arr, k) {
  let candidateOne = 0;
  let candidateTwo = 0;
  let candidateThree = 0;

  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;

  let maxPossibleElement = Math.floor(arr.length / k);

  for (let i = 0; i <= arr.length; i++) {
    if (countOne === 0) {
      candidateOne = arr[i];
    } else if (arr[i] === candidateOne) {
      countOne++;
    } else {
      countOne--;
    }

    if (countTwo === 0) {
      candidateTwo = arr[i];
    } else if (arr[i] === candidateTwo) {
      countTwo++;
    } else {
      countTwo--;
    }

    if (countThree === 0) {
      candidateThree = arr[i];
    } else if (arr[i] === candidateThree) {
      countThree++;
    } else {
      countThree--;
    }

    countOne = 0;
    countTwo = 0;
    countThree = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === candidateOne) {
        countOne++;
      } else if (arr[j] === candidateTwo) {
        countTwo++;
      } else if (arr[j] === candidateThree) {
        countThree++;
      }
    }

    const numbers = [];

    if (maxPossibleElement < countOne) {
      numbers.push(candidateOne);
    }

    if (maxPossibleElement < countTwo) {
      numbers.push(candidateTwo);
    }

    if (maxPossibleElement < countThree) {
      numbers.push(candidateThree);
    }

    return numbers;
  }
}

console.log(majorityNbyKelElements([1, 1, 1, 2, 2, 2, 3, 3], 3));
