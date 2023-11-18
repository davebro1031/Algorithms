const mergeCount = (arr, p, q, r, n) => {
    let L = []
    let R = []
    for (let i = p; i <= q; i++) L.push(arr[i])
    for (let j = q + 1; j <= r; j++) R.push(arr[j])
    let i = 0
    let j = 0
    let k = p
    console.log(L, R)
    while (i < L.length && j < R.length) {
        if (L[i] < R[j]) {
            arr[k] = L[i++]
        } else {
            arr[k] = R[j++]
            n[0] += (L.length - i)
        }
        k++
    }
    if (i === L.length) {
        for (let m = j; m < R.length; m++) { arr[k++] = R[m] }
    } else {
        for (let m = i; m < L.length; m++) { arr[k++] = L[m] }
    }


}

const countInversions = (arr, p, r, n) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        countInversions(arr, p, q, n)
        countInversions(arr, q + 1, r, n)
        mergeCount(arr, p, q, r, n)
    }
}

let arr = [9, 3, 2, 8, 4, 5]
let n = [0]
countInversions(arr, 0, arr.length - 1, n)
console.log(arr, n[0])

