const merge = (A, p, q, r) => {
    const n1 = q - p + 1
    const n2 = r - q
    let L = []
    let R = []
    for (let i = 0; i < n1; i++) L[i] = A[p + i]
    for (let i = 0; i < n2; i++) R[i] = A[q + 1 + i]
    L[n1] = 1/0
    R[n2] = 1/0
    
    let i = 0
    let j = 0
    console.log(L, R)

}

merge([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3,6,9)