import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const InsertionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrace(trace, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const InsertionSortKey = createKey(
  'Comparing',
  'Swapping',
  'Overwrite from memory'
);
export const InsertionSortDesc = {
  title: 'Insertion Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{' '}
      This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. <br />An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, <span style={{ fontWeight: 'bold' }}>insertion sort.</span><br />

The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of <span style={{ fontWeight: 'bold' }}>Ο(n2)</span>, where n is the number of items.<br />
      <span style={{ fontWeight: 'bold' }}>Algorithm: </span><br />
      <span style={{ fontWeight: 'bold' }}>Step 1 −</span> If it is the first element, it is already sorted. return 1;<br />
      <span style={{ fontWeight: 'bold' }}>Step 2 − </span>Pick next element<br />
      <span style={{ fontWeight: 'bold' }}>Step 3 − </span>Compare with all elements in the sorted sub-list<br />
      <span style={{ fontWeight: 'bold' }}>Step 4 − </span>Shift all the elements in the sorted sub-list that is greater than the  value to be sorted<br />
      <span style={{ fontWeight: 'bold' }}>Step 5 −</span> Insert the value<br />
      <span style={{ fontWeight: 'bold' }}>Step 6 −</span> Repeat until list is sorted<br />
    </p>
  ),
  worstCase: (
    <span>
      O(<em>n</em><em>2</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em><em>2</em>)
    </span>
  ),
  bestCase: <span>O(<em>n</em>)</span>,
  space: <span>O(<em>1</em>)</span>
};

export default InsertionSort;
