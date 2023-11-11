const insertSort = (a) => {
    for(let i = 1; i < a.length; i++){
        let key = a[i]
        let j = i - 1
        while(key < a[j]){
            a[j+1] = a[j]
            a[j--] = key
        }
    }
    return a
}

console.log(insertSort([2,5,3,7,2,1,3,3]))