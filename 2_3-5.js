const binarySearch = (arr, p, r, n) => {
    if (n < arr[0] || n > arr[r] || p >= r) return console.log(-1)
    const q = Math.floor((p + r) / 2)
    if (arr[q] === n) return console.log(q)
    if (arr[q] > n) {
        binarySearch(arr, p, q - 1, n)
    } else {
        binarySearch(arr, q + 1, r, n)
    }
}
const arr = [1, 2, 5, 7, 9, 11, 11, 12, 13, 14, 17]
binarySearch(arr, 0, arr.length - 1, 15)

const binarySearch2 = (arr, p, r, n, i) => {
    if (n < arr[0] || n > arr[r] || p >= r) {
        i = -1
        return 
    }
    const q = Math.floor((p + r) / 2)
    if (arr[q] === n) {
        i = q
        return 
    }
    if (arr[q] > n) {
        binarySearch2(arr, p, q - 1, n, i)
    } else {
        binarySearch2(arr, q + 1, r, n, i)
    }
}

let i = 0
binarySearch2(arr, 0, arr.length - 1, 14, i)
console.log(i)