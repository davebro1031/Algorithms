/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    let remH = []
    let remV = []
    for(let i = 1; i <= n + 2; i++){
        if(hBars.includes(i)) continue
        remH.push(i)
    }
    for(let i = 1; i <= m+2; i++){
        if(vBars.includes(i)) continue
        remV.push(i)
    }

    return 
};

const n = 2, m = 3, hBars = [2,3], vBars = [3,4]
const result = maximizeSquareHoleArea(n, m, hBars, vBars)
console.log(result)