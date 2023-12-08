
const slidingWindowMax = (arr, W) => {
    // Initialize stack
    let stack = [{ val: arr[0], i: 0 }]
    for (let i = 1; i < W; i++) {
        while (arr[i] >= stack[stack.length - 1]?.val) stack.pop()
        stack.push({ val: arr[i], i })
    }
    // initialize result array
    let result = [stack[0].val]

    // loop through remainder of array to complete problem
    for (let i = W; i < arr.length; i++) {

    }
    return result
}

const arr = [5, 4, 3, 6, 4, 7, 8, 1, 4, 3, 2, 0]
const W = 5
const result = slidingWindowMax(arr, W)
console.log(result)