const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = arr.length - 1; j > i; j--){
            if(arr[j] < arr[j - 1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
}

const arr = [2,3,4,5,3,2,7,4,6,4,2,6,9,8,4,3]
bubbleSort(arr)
console.log(arr)