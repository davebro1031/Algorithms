const binarySearch = (arr, p, r, n) => {
    console.log(p, r)
    if (n < arr[0] || n > arr[r] || p >= r) return -1
    const q = Math.floor((p + r) / 2)
    if (arr[q] === n) return q
    if (arr[q] > n) {
        return binarySearch(arr, p, q - 1, n)
    } else {
        return binarySearch(arr, q + 1, r, n)
    }
}
const arr = [1, 2, 5, 7, 9, 11, 11, 12, 13, 14, 17]
console.log(binarySearch(arr, 0, arr.length - 1, 17))