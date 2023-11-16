const binarySearch = (arr, p, r, n) => {
    if (n < arr[0] || n > arr[r]) return console.log(-1)
    if (p >= r) return console.log(-1)
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