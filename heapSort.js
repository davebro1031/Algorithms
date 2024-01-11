const left = (i) => {
    return 2 * (i + 1) - 1
}
const right = (i) => {
    return 2 * (i + 1)
}
const parent = (i) => {
    return Math.floor((i + 1) / 2) - 1
}



const heapSize = 10

const maxHeapify = (arr, i) => {
    let l = left(i)
    let r = right(i)
    let largest = i
    if (l <= heapSize && arr[i] < arr[l]) largest = l
    if (r <= heapSize && arr[largest] < arr[r]) largest = r
    if (largest === i) return
    let key = arr[i]
    arr[i] = arr[largest]
    arr[largest] = key
    maxHeapify(arr, largest)
}

const maxHeapifyLoop = (arr, i) => {
    let j = i
    let l = left(j) - 1
    let r = right(j) - 1
    let largest = j
    if (l <= heapSize && arr[l] > arr[j]) largest = j
    if (r <= heapSize && arr[r] > arr[largest]) largest = r
    while (j < largest) {

        let key = arr[largest]
        arr[largest] = arr[j]
        arr[j] = key
        j = largest


        let l = left(j)
        let r = right(j)
        if (l <= heapSize && arr[l] > arr[j]) largest = j
        if (r <= heapSize && arr[r] > arr[largest]) largest = r
    }

}

const buildMaxHeap = (arr) => {
    for (i = Math.floor(arr.length / 2) - 1; i >= 0; i--) maxHeapify(arr, i)
}

const heapSort = (arr) => {
    buildMaxHeap(arr)
    for(let i = arr.length - 1; i >= 1; i--){
        let key = arr[0]
        arr[0] = arr[i]
        arr[i] = key
        maxHeapify(arr, 0)
    }
}

const heap = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
const heap2 = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
const heap3 = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]

// maxHeapifyLoop(heap, 1)
// maxHeapify(heap2, 1)

// console.log(heap, heap2)

buildMaxHeap(heap3)
console.log(heap3)