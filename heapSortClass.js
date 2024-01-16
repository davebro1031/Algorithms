class maxHeap {
    constructor(arr) {
        this.heap = arr;
        this.heapsize = 0
    }
    get length() { return this.heap.length }
    left(i) { return 2 * (i + 1) - 1 }
    right(i) { return 2 * (i + 1) }
    parent(i) { return Math.floor((i + 1) / 2) - 1 }
    heapify(i) {
        let j = i
        let l = this.left(j)
        let r = this.right(j)
        let largest = j
        if (l <= this.heapsize && this.heap[l] > this.heap[j]) largest = j
        if (r <= this.heapsize && this.heap[r] > this.heap[largest]) largest = r
        while (j < largest) {

            let key = this.heap[largest]
            this.heap[largest] = this.heap[j]
            this.heap[j] = key
            j = largest


            let l = this.left(j)
            let r = this.right(j)
            if (l <= this.heapsize && this.heap[l] > this.heap[j]) largest = j
            if (r <= this.heapsize && this.heap[r] > this.heap[largest]) largest = r
        }
    }
    build() {
        for (i = Math.floor(this.length / 2) - 1; i >= 0; i--) this.heapify(i)
    }

}

var heap = new maxHeap([1, 5, 9, 2, 7, 4])
heap.heapsize = 100
heap.heapify(3)
console.log(heap)