const insert = (key, arr) => {
    for(let i = 0; i < arr.length; i++){
        if(key > arr[i]){
            temp = arr[i]
            arr[i] = key
            key = temp
        }
    }
    arr[arr.length] = key
}