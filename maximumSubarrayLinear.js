const maximumSubarray = (arr) => {
    let L = 0
    let sum = 0
    let max = 0
    let R = 0
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i]
        max = Math.max(sum, max)

        if(sum < 0) {
            L = i+1
            sum = 0
        }
        if(max === sum){
            R = i
        }
    }
    return [L, R, max]
}

const arr = [-1, 2, 3, -2, -4, 5, 8, -2, 11, -10, -10, -1, 3, 4, -50, 1, 1, 1, 1, 1, 18]
const result = maximumSubarray(arr)
console.log(result)