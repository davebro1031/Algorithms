maximumSubarrayWithMid = (arr, p, q, r) => {
    let maxL = 0
    let maxLI = q
    let sumL = 0
    let maxR = 0
    let maxRI = q
    let sumR = 0
    for (let i = q; i >= p; i--) {
        sumL += arr[i]
        if (maxL < sumL) {
            maxLI = i
            maxL = sumL
        }
    }
    for (let i = q; i <= r; i++) {
        sumR += arr[i]
        if (maxR < sumR) {
            maxRI = i
            maxR = sumR
            console.log(maxR)
        }
    }
    console.log(maxL, maxR)
    return [maxLI, maxRI, maxR + maxL - arr[q]]
}

maximumSubarray = (arr, p, r) => {
    console.log(p,r)
    if (p === r) {
        return [p, r, arr[p]]
    } else {
        const q = Math.floor((p + r) / 2)
        const leftSum = maximumSubarray(arr, p, q)
        const rightSum = maximumSubarray(arr, q + 1, r)
        const midSum = maximumSubarrayWithMid(arr, p, q, r)
        let maxSum = Math.max(leftSum[2], rightSum[2], midSum[2])
        if (maxSum === leftSum[2]) return leftSum
        if (maxSum === rightSum[2]) return rightSum
        return midSum
    }
}

const arr = [-1,2,3,-2,-4,5,8,-2,11,-10,-10,-1,3,4]
const result = maximumSubarrayWithMid(arr, 0, Math.floor((arr.length-1)/2) ,arr.length-1)
console.log(result)
