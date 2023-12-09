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
                break
            }
        }
    }
    return result
};

const words = [], x = "o"
const result = findWordsContaining(words, x)
console.log(result)