var Heap = (function () {

    // A Heap is an Array with a length.
    // Changing length may break the heap invariant.
    // Use size instead of length.

    // https://en.wikipedia.org/wiki/Heap_(data_structure)
    // https://en.wikipedia.org/wiki/Heapsort

    'use strict';

    // Create a heap
    function Heap(/* ...arrays */) {
        var arrays = arguments;
        var n = arrays.length;
        var size = 0;

        for (var i = 0; i < n; i++) {
            size += arrays[i].length;
        }

        var heap = new Array(size);
        var k = 0;

        for (var i = 0; i < n; i++) {
            var array = arrays[i];
            var m = array.length;

            for (var j = 0; j < m; j++, k++) {
                heap[k] = array[j];
            }
        }

        for (var i = (size >>> 1) - 1; i >= 0; i--) {
            var x = heap[i];
            var j = i;
            var k = (j << 1) + 1;

            while (k < size) {
                if (heap[k + 1] > heap[k]) k++;
                if (heap[k] <= x) break;

                heap[j] = heap[k];
                j = k;
                k = (j << 1) + 1;
            }

            heap[j] = x;
        }

        heap.__proto__ = Heap.prototype;
        return heap;
    }

    Object.defineProperty(Heap, 'prototype', {
        writable: false, enumerable: false, configurable: false
    });

    // Return true if empty
    Object.defineProperty(Heap.prototype, 'isEmpty', {
        set: undefined, enumerable: false, configurable: true,
        get: function () {
            return this.length === 0;
        }
    });

    // Get the size
    Object.defineProperty(Heap.prototype, 'size', {
        set: undefined, enumerable: false, configurable: true,
        get: function () {
            return this.length;
        }
    });

    // Get the max value
    Object.defineProperty(Heap.prototype, 'peek', {
        writable: true, enumerable: false, configurable: true,
        value: function () {
            return this[0];
        }
    });

    // Delete the max value
    Object.defineProperty(Heap.prototype, 'pop', {
        writable: true, enumerable: false, configurable: true,
        value: function () {
            var heap = this;
            var y = heap[0];
            var x = Array.prototype.pop.call(heap);
            var size = heap.length;

            if (size > 0) {
                var i = 0;
                var j = 1;

                while (j < size) {
                    if (heap[j + 1] > heap[j]) j++;
                    if (heap[j] <= x) break;

                    heap[i] = heap[j];
                    i = j;
                    j = (i << 1) + 1;
                }

                heap[i] = x;
            }

            return y;
        }
    });

    // Add a value
    Object.defineProperty(Heap.prototype, 'push', {
        writable: true, enumerable: false, configurable: true,
        value: function (x) {
            var heap = this;
            var size = Array.prototype.push.call(heap, undefined);
            var i = size - 1;

            while (i > 0) {
                var j = (i - 1) >>> 1;

                if (heap[j] >= x) break;

                heap[i] = heap[j];
                i = j;
            }

            heap[i] = x;
            return size;
        }
    });

    // Delete the max value and add a value
    Object.defineProperty(Heap.prototype, 'replace', {
        writable: true, enumerable: false, configurable: true,
        value: function (x) {
            var heap = this;
            var y = heap[0];
            var size = heap.length;

            if (size > 0) {
                var i = 0;
                var j = 1;

                while (j < size) {
                    if (heap[j + 1] > heap[j]) j++;
                    if (heap[j] <= x) break;

                    heap[i] = heap[j];
                    i = j;
                    j = (i << 1) + 1;
                }

                heap[i] = x;
            }

            return y;
        }
    });

    return Heap;

})();

