const merge = (arr1, arr2) => {
    let merged = []
    while(arr1.length && arr2.length)merged.push( arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
    merged = [...merged, ...arr1, ...arr2]
    // merged.push(...arr2)
    return merged
}

console.log(merge([1,1,2,2,3,3,4,5,8,10,11,12,13,13], [1,1,2,3,6,9,10]))