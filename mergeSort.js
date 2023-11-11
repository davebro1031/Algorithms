const merge = (arr1, arr2) => {
    let merged = []
    while (arr1.length && arr2.length) merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
    merged = [...merged, ...arr1, ...arr2]
    return merged
}

const split = (arr) => {
    const splitPoint = Math.floor(arr.length / 2)
    const arr1 = arr.slice(0, splitPoint)
    const arr2 = arr.slice(splitPoint)
    console.log(splitPoint)
    return [arr1, arr2]
}

const mergeSort = (arr) => {
    if (arr.length === 1) return arr
    let [arr1, arr2] = split(arr)
    return merge(mergeSort(arr1), mergeSort(arr2))
}

console.log(merge([1, 1, 2, 2, 3, 3, 4, 5, 8, 10, 11, 12, 13, 13], [1, 1, 2, 3, 6, 9, 10]))
console.log(mergeSort([3, 6, 2, 8, 1, 1, 6, 9, 12, 3, 2, 10, 0, 11]))