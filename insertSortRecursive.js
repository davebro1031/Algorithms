const insert = (key, arr) => {
    for(let i = 0; i < arr.length; i++){
        if(key < arr[i]){
            temp = arr[i]
            arr[i] = key
            key = temp
        }
    }
    arr[arr.length] = key
}

let arr = [1,1,2,3,5,8,13,21]
let key = 20
insert(key, arr)
console.log(arr)