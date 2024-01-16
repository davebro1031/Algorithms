class maxHeap {
    constructor(arr) {
        this.heap = arr;
        this.heapsize = 0
    }
    get length() { return this.heap.length }
    left(i) { return 2 * i + 1 }
    right(i) { return 2 * i + 2 }
    parent(i) { return Math.floor((i + 1) / 2) - 1 }
    heapify(i) {
        let j = i
        let l = this.left(j)
        let r = this.right(j)
        let largest = j
        if (l <= this.heapsize && this.heap[l] > this.heap[j]) largest = l
        if (r <= this.heapsize && this.heap[r] > this.heap[largest]) largest = r
        while (j < largest) {

            let key = this.heap[largest]
            this.heap[largest] = this.heap[j]
            this.heap[j] = key
            j = largest


            let l = this.left(j)
            let r = this.right(j)
            if (l <= this.heapsize && this.heap[l] > this.heap[j]) largest = l
            if (r <= this.heapsize && this.heap[r] > this.heap[largest]) largest = r
        }
    }
    build() {
        this.heapsize = this.length - 1
        for (let i = Math.floor(this.length / 2) - 1; i >= 0; i--) this.heapify(i)
    }
}

const heapSort = (a) => {
    a.build()
    console.log(a)
    for (let i = a.length - 1; i >= 1; i--) {
        let key = a.heap[0]
        a.heap[0] = a.heap[i]
        a.heap[i] = key

        a.heapsize--
        console.log(a)

        a.heapify(0)
        console.log(a)
    }
}

var heap = new maxHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])
heapSort(heap)
console.log(heap)