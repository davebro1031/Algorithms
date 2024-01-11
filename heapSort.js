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
    console.log(arr)
    maxHeapify(arr, largest)
}

const heap = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]

maxHeapify(heap, 1)
console.log(heap)