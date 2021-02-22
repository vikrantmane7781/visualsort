import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey
} from './helpers';

const HeapSort = (nums) => {
  const trace = newTrace(nums);

  // Helper functions to quickly access nodes
  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;
  const parent = (i) => Math.floor((i - 1) / 2);

  const maxHeapify = (array, i, heapsize) => {
    const leftChild = left(i);
    const rightChild = right(i);

    // Visualize: Compare parent and leftChild
    addToTrace(trace, array, lastSorted(trace), [i, leftChild]);

    let largest =
      leftChild < heapsize && array[leftChild] > array[i]
        ? leftChild
        : i;

    // Visualize: Compare largest and rightChild
    addToTrace(trace, array, lastSorted(trace), [largest, rightChild]);

    if (rightChild < heapsize && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      // Visualize: Select largest child and parent
      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      swap(array, i, largest);

      // Visualize: Swap largest child and parent
      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      maxHeapify(array, largest, heapsize);
    }
  };

  const BuildMaxHeap = (array) => {
    const start = Math.floor(array.length / 2);
    const heapsize = array.length;
    for (let i = start; i >= 0; i--) {
      maxHeapify(array, i, heapsize);
    }

    // Visualize: Mark heap as built
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [],
      [],
      [],
      createRange(0, array.length)
    );
  };

  const heapSort = (array) => {
    BuildMaxHeap(array);
    let heapsize = array.length;
    for (let i = array.length - 1; i > 0; i--) {
      // Visualize: Select Maximum
      addToTrace(trace, array, lastSorted(trace), [], [0, i]);

      swap(array, 0, i);
      heapsize -= 1;

      // Visualize: Swap with last element in heap
      addToTrace(trace, array, [...lastSorted(trace), i], [], [0, i]);

      maxHeapify(array, 0, heapsize);

      // Visualize: Heap created
      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [],
        [],
        [],
        createRange(0, heapsize)
      );
    }
    addToTrace(trace, array, [...lastSorted(trace), 0]);
  };

  // Execute Heapsort
  heapSort(nums);
  return trace;
};

export const HeapSortKey = createKey(
  'Comparing',
  'Swapping',
  null,
  'Heap Built'
);

export const HeapSortDesc = {
  title: 'Heap Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Heapsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heap Sort
        </a>{' '}
        Heap sort is performed on the heap data structure. We know that heap is a complete binary tree. Heap tree can be of two types. Min-heap or max heap. For min heap the root element is minimum and for max heap the root is maximum.<br /> After forming a heap, we can delete an element from the root and send the last element to the root. `After these swapping procedure, we need to re-heap the whole array. By deleting elements from root we can sort the whole array.
      </p>
      <p>
        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>The complexity of Heap Sort Technique:</span><br />
        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Time Complexity:</span> <span style={{ fontWeight: 'bold' }}>O(n log n)</span><br />
        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Space Complexity:</span> <span style={{ fontWeight: 'bold' }}>O(1)</span><br />
      </p>

    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default HeapSort;
