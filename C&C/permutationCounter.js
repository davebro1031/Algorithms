
const findPermsLen5 = (str) => {
    let perms = []
    for (let i = 0; i < str.length; i++) {
        let L1 = str[i]
        let p1 = str.slice(0, i) + str.slice(i + 1)
        for (let j = 0; j < p1.length; j++) {
            let L2 = p1[j]
            let p2 = p1.slice(0, j) + p1.slice(j + 1)
            for (let k = 0; k < p2.length; k++) {
                let L3 = p2[k]
                let p3 = p2.slice(0, k) + p2.slice(k + 1)
                for (let m = 0; m < p3.length; m++) {
                    let L4 = p3[m]
                    let p4 = p3.slice(0, m) + p3.slice(m + 1)
                    for (let n = 0; n < p4.length; n++) {
                        let L5 = p4[n]
                        if (perms.includes(L1 + L2 + L3 + L4 + L5)) continue
                        perms.push(L1 + L2 + L3 + L4 + L5)

                    }
                }
            }
        }

    }
    console.log(perms)
    return perms.length
}

const findNonDistinctPermsLen5 = (str) => {
    let perms = []
    for (let i = 0; i < str.length; i++) {
        let L1 = str[i]
        let p1 = str.slice(0, i) + str.slice(i + 1)
        for (let j = 0; j < p1.length; j++) {
            let L2 = p1[j]
            let p2 = p1.slice(0, j) + p1.slice(j + 1)
            for (let k = 0; k < p2.length; k++) {
                let L3 = p2[k]
                let p3 = p2.slice(0, k) + p2.slice(k + 1)
                for (let m = 0; m < p3.length; m++) {
                    let L4 = p3[m]
                    let p4 = p3.slice(0, m) + p3.slice(m + 1)
                    for (let n = 0; n < p4.length; n++) {
                        let L5 = p4[n]
                        perms.push(L1 + L2 + L3 + L4 + L5)
                    }
                }
            }
        }

    }
    return perms
}

const str = "ADDITION"
const result = findNonDistinctPermsLen5(str)
console.log(result.length)