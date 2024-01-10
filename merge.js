const arr = [1, 6, 3, 9, 8, 2, 6, 3, 0]

const sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (arr[j] < arr[j - 1]) {
            let key = arr[j]
            arr[j] = arr[--j]
            arr[j] = key
        }
    }
    return arr
}

console.log(sort(arr))