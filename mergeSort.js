const merge = (arr1, arr2) => {
    const merged = []
    while(arr1.length && arr2.length){
        merged.push( arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
    }
    merged.push(arr1.length ? arr1 : arr2)
    return merged.flat()
}

console.log(merge([1,1,3,7,9,11], [1,2,3,4,6,8,10,11,12,13,14]))