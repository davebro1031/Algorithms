/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a,b)=> a-b)
    vBars.sort((a,b)=> a-b)
    console.log(hBars, vBars)
    let currStretch = 1
    let HmaxStretch = 1
    let prev = hBars[0]
    for(let i = 1; i < hBars.length; i++){
        if(hBars[i] === prev+1){
            currStretch++
        } else {
            HmaxStretch = Math.max(HmaxStretch, currStretch)
            currStretch = 1
        }
        prev = hBars[i]
    }
    HmaxStretch = Math.max(HmaxStretch, currStretch)

    currStretch = 1
    let VmaxStretch = 1
    prev = vBars[0]
    for(let i = 1; i < vBars.length; i++){
        if(vBars[i] === prev+1){
            currStretch++
        } else {
            VmaxStretch = Math.max(VmaxStretch, currStretch)
            currStretch = 1
        }
        prev = vBars[i]
    }
    VmaxStretch = Math.max(VmaxStretch, currStretch)
    return (Math.min(HmaxStretch, VmaxStretch) + 1)**2
};

const n = 12, m = 5, hBars = [10,9,13,6,3], vBars = [3,4,2,5,6]
const result = maximizeSquareHoleArea(n, m, hBars, vBars)
console.log(result)