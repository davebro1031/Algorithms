maximumSubarrayWithMid = (arr, p, q, r) => {

}

maximumSubarray = (arr, p, r) => {
    if (p = r) {
        return [p, r, arr[p]]
    } else {
        const q = Math.max((p + r) / 2)
        const leftSum = maximumSubarray(arr, p, q)
        const rightSum = maximumSubarray(arr, q + 1, r)
        const midSum = maximumSubarrayWithMid(arr, p, q, r)
        let maxSum = Math.max(leftSum[2], rightSum[2], midSum[2])
        if(maxSum===leftSum[2]) return leftSum
        if(maxSum===rightSum[2]) return rightSum
        return midSum
    }
}