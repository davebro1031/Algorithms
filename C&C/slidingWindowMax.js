
const slidingWindowMax = (arr, W) => {
    if(W===1) return arr
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
        // Update stack:  1) check if we have passed beyond first element
        if(stack[0].i + W === i ) stack.shift()

        // Update stack: 2) look at the current new array value and put it in the correct place
        while (arr[i] >= stack[stack.length - 1]?.val) stack.pop()
        stack.push({ val: arr[i], i })

        // update result array with first stack element
        result.push(stack[0].val)

    }
    return result
}

const arr = [5,4,3,2,1]
const W = 1
const result = slidingWindowMax(arr, W)
console.log(result)