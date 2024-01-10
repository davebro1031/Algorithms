let cards = []
for (let i = 0; i < 52; i++) {
    cards[i] = {
        val: i % 13 + 1,
        suit: 2 ** (i % 4)
    }
}
cards.sort((a,b) => a.val - b.val).sort((a,b)=> a.suit - b.suit)

const all5cardHands = (cards) => {
    let result = []
    for(let i = 0; i < 48; i++){
        for(let j = 1; j < 49; j++){
            for(let k = 2; k < 50; k++){
                for(let m = 3; m < 51; m++){
                    for(let n = 4; n < 52; n++){
                        result.push([i,j,k,m,n])
                    }
                }
            }
        }
    }
    console.log(result)
}

console.log(all5cardHands())