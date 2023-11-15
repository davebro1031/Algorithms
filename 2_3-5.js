const insert = (arr, n) => {
    const key = arr[n]
    let j = n - 1
    while (key < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j--] = key
    }

}

const insertSortRecursive = (arr, n) => {
    if (n > 1) {
        insertSortRecursive(arr, n - 1)
        insert(arr, n-1)
    }
}