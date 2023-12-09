/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = []
    for(let i = 0; i < words.length; i++){
        for(let j of words[i]){
            if(j===x) {
                result.push(i)
                continue
            }
        }
    }
    return result
};

const words = ["abc","bcd","aaaa","cbc"], x = "z"
const result = findWordsContaining(words, x)
console.log(result)