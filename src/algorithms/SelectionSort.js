import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const SelectionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 0; i < nums.length - 1; i++) {
    // Internal Loop: Find index of min value
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      // Visualize: comparing A[j] to A[minIndex]
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        // Visualize: discovered new minIndex
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        // Visualize: reassign new minIndex;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }

    // Visualize: i'th value to be swapped with min value
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

    swap(nums, i, minIndex);

    // Visualize: i'th value has been swapped with min value
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }

  // Visualize: Final item in the array is sorted
  addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

  return trace;
};

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export const SelectionSortDesc = {
  title: 'Selection Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Selection_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>{' '}
  is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.<br />

The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.<br />

This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.<br />

      <span style={{ fontWeight: 'bold' }}>Algorithm :</span><br />
      <span style={{ fontWeight: 'bold' }}>Step 1 −</span> Set MIN to location 0.<br />
      <span style={{ fontWeight: 'bold' }}>Step 2 −</span> Search the minimum element in the list.<br />
      <span style={{ fontWeight: 'bold' }}>Step 3 − </span> Swap with value at location MIN.<br />
      <span style={{ fontWeight: 'bold' }}>Step 4 −</span> Increment MIN to point to next element.<br />
      <span style={{ fontWeight: 'bold' }}>Step 5 −</span> Repeat until list is sorted.<br />

    </p>
  ),
  worstCase: (
    <span>
      O(<em>n<sup>2</sup></em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n<sup>2</sup></em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n<sup>2</sup></em>)
    </span>
  ),
  space: <span>O(<em>1</em>)</span>
};

export default SelectionSort;
