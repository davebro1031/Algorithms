
const slidingWindowMax = (arr, W) => {
    // Initialize variables
    let nextMax = {
        val: -Infinity,
        i: -1
    }
    let max = {
        val: arr[0],
        i: 0
    }
    for (let i = 1; i < W; i++) {
        if (arr[i] > max.val) {
            max.val = arr[i]
            max.i = i
            nextMax.val = -1 / 0
        } else if (arr[i] > nextMax.val) {
            nextMax.val = arr[i]
            nextMax.i = i
        }
    }
    let result = [max.val]
    for (let i = W; i < arr.length; i++) {
        console.log("begin:", i)
        if (i - W >= max.i) {
            if (arr[i] > nextMax.val) {
                max.val = arr[i]
                max.i = i
                nextMax.val = -1 / 0
            } else {
                max.val = nextMax.val
                max.i = nextMax.i
                nextMax.val = -1 / 0
                for (let j = nextMax.i + 1; j <= i; j++) {
                    if (arr[j] > nextMax.val) {
                        nextMax.val = arr[j]
                        nextMax.i = j
                    }
                }
                // nextMax.val = arr[i]
                // nextMax.i = i
            }
            result.push(max.val)
            continue
        }

        if (arr[i] > max.val) {
            max.val = arr[i]
            max.i = i
            nextMax.val = -1 / 0
        } else if (arr[i] > nextMax.val) {
            nextMax.val = arr[i]
            nextMax.i = i
        }
        result.push(max.val)

    }
    return result
}

const arr = [5, 4, 3, 2, 1]
const W = 3
const result = slidingWindowMax(arr, W)
console.log(result)