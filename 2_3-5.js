const binarySearch = (arr, p, r, n) => {
    if(p >= r) return "not found"
    const q = Math.floor((p + r) / 2)
    if (arr[q] === n) return q
    if (arr[q] < n) {
        binarySearch(arr, p, q - 1, n)
    } else {
        binarySearch(arr, q + 1, r, n)
    }
}

