const insert = (key, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (key < arr[i]) {
            temp = arr[i]
            arr[i] = key
            key = temp
        }
    }
    arr[arr.length] = key
    return arr
}

const insertSortRecursive = (arr) => {
    if (arr.length === 1) return arr
    const n = arr.length
    return insert(
        arr[n - 1],
        insertSortRecursive(arr.slice(0, n - 1))
    )
}

let arr = [2, 5, 8, 1, 3, 5, 2, 4, 9, 2, 1]
// arr = insertSortRecursive(arr)
console.log(arr)



const insert2 = (arr, n) => {
    const key = arr[n]
    let j = n - 1
    while (key < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j--] = key
    }

}

const insertSortRecursive2 = (arr, n) => {
    if (n > 1) {
        insertSortRecursive2(arr, n - 1)
        insert2(arr, n-1)
    }
}

insertSortRecursive2(arr, arr.length)
console.log(arr)
