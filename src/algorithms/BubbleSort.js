import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const BubbleSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  for (let i = 0; i < nums.length; i++) {
    let flag = 0
    for (let j = 0; j < nums.length - i - 1; j++) {
      // Visualize: Comparing A[j] and A[j + 1]
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        // Visualize: Swap A[j] and A[j + 1]
        flag = 1
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }

    }

    // Visualize: final value is sorted
    addToTrace(trace, nums, [
      ...lastSorted(trace),
      nums.length - 1 - i
    ]);
    /*if (flag == 0) {
      break
    }*/
  }

  return trace;
};

export const BubbleSortKey = createKey('Comparing', 'Swapping');
export const BubbleSortDesc = {
  title: 'Bubble Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{' '}
      is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.<br />
Example:<br />
First Pass:<br />
( 5 1 4 2 8 ) {'->'}  ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 {'>'} 1.<br />
( 1 5 4 2 8 ) {'->'}  ( 1 4 5 2 8 ), Swap since 5 {'>'} 4<br />
( 1 4 5 2 8 ) {'->'}  ( 1 4 2 5 8 ), Swap since 5 {'>'} 2<br />
( 1 4 2 5 8 ) {'->'}  ( 1 4 2 5 8 ), Now, since these elements are already in order (8 {'>'}5), algorithm does not swap them.<br />

Second Pass:<br />
( 1 4 2 5 8 ) {'->'}  ( 1 4 2 5 8 )<br />
( 1 4 2 5 8 ) {'->'}  ( 1 2 4 5 8 ), Swap since 4 {'>'} 2<br />
( 1 2 4 5 8 ) {'->'}  ( 1 2 4 5 8 )<br />
( 1 2 4 5 8 ) {'->'}   ( 1 2 4 5 8 )<br />
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.<br />

Third Pass:<br />
( 1 2 4 5 8 ) {'->'}  ( 1 2 4 5 8 )<br />
( 1 2 4 5 8 ) {'->'}  ( 1 2 4 5 8 )<br />
( 1 2 4 5 8 ) {'->'}  ( 1 2 4 5 8 )<br />
( 1 2 4 5 8 ) {'->'}  ( 1 2 4 5 8 )<br />
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
};
export default BubbleSort;
