const merge = (A, p, q, r) => {
    const n1 = q - p + 1
    const n2 = r - q
    let L = []
    let R = []
    for (let i = 0; i < n1; i++) L[i] = A[p + i]
    for (let i = 0; i < n2; i++) R[i] = A[q + 1 + i]
    L[n1] = 1 / 0
    R[n2] = 1 / 0

    let i = 0
    let j = 0
    for (k = p; k <= r; k++) {
        if (L[i] < R[j]) {
            A[k] = L[i++]
        } else {
            A[k] = R[j++]
        }
    }
}
let arr = [0, 1, 2, 3, 4, 5, 6, 1, 3, 5, 10, 11, 12, 13, 14, 15]
merge(arr, 3, 6, 9)

console.log(arr)