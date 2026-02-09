```JS
// Create a heap

const heap = Heap();

console.log(heap); // []
```
```JS
// Heapify an array

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]
```
```JS
// Get the size

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]

const result = heap.size;

console.log(result); // 3
```
```JS
// Check if empty

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]

const result = heap.isEmpty;

console.log(result); // false
```
```JS
// Delete the max

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]

const result = heap.pop();

console.log(result); // 7
console.log(heap); // [3, 2]
```
```JS
// Add a value

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]

const result = heap.push(10);

console.log(result); // 4
console.log(heap); // [10, 7, 2, 3]
```
```JS
// Delete the max and add a value

const array = [2, 3, 7];
const heap = Heap(array);

console.log(heap); // [7, 3, 2]

const result = heap.replace(10);

console.log(result); // 7
console.log(heap); // [10, 3, 2]
```
