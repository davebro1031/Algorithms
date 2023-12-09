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
    let hMax = 1
    for(let i = 1; i < remH.length; i++){
        hMax = Math.max(hMax, remH[i]-remH[i-1])
    }
    let vMax = 1
    for(let i = 1; i < remV.length; i++) {
        vMax = Math.max(vMax, remV[i] - remV[i-1])
    }
    return Math.min(hMax, vMax)**2
};

const n = 2, m = 3, hBars = [2,3], vBars = [2,3,4]
const result = maximizeSquareHoleArea(n, m, hBars, vBars)
console.log(result)