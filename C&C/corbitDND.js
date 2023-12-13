let soln = {}

for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        for (let k = 1; k <= 6; k++) {
            for (let l = 1; l <= 6; l++) {
                let roll = [i, j, k, l]
                roll.sort((a, b) => a - b)
                roll.shift()
                sum = roll.reduce((acc, curr) => acc + curr, 0)
                soln[sum] = (soln[sum] ? soln[sum] + 1 : 1)
            }
        }
    }
}

let total = 0
for(let e of Object.keys(soln)){
    total += e*soln[e]
    soln[e] = 100*soln[e]/(6**4)
}

console.log(soln)
console.log(total/(6**4))