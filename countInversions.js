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





// Function to count the number of inversions
// during the merge process
function mergeAndCount(arr, l, m, r) {

    // Left subarray
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);

    }

    // Right subarray
    let right = [];
    for (let i = m + 1; i < r + 1; i++) {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        }
        else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
    return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {

    // Keeps track of the inversion count at a
    // particular node of the recursion tree
    let count = 0;
    if (l < r) {
        let m = Math.floor((l + r) / 2);

        // Total inversion count = left subarray count
        // + right subarray count + merge count

        // Left subarray count
        count += mergeSortAndCount(arr, l, m);

        // Right subarray count
        count += mergeSortAndCount(arr, m + 1, r);

        // Merge count
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}