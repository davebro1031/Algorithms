const gcd = (n, m) => {
    const max = Math.max(n, m)
    let q = Math.min(n, m)
    let r = max % q
    let prevR = q
    while (r > 0) {
        prevR = r
        r = q % r
        q = prevR
    }
    return prevR
}

const flowerBouquet = (n, m) => {
    if (gcd(n, m) !== 1) return 1 / 0
    const max = Math.max(n, m)
    const min = Math.min(n, m)

    // initialize solution array.  Eventually the solution array will look like:
    // [59, 6(10) + 13(0), 6(8) + 13(1), 6(6) + 13(2), 6(4) + 13(3), 6(2)+13(4), 6(0) + 13(5)]
    // in other words, the highest possible number, followed by solutions for each of the [min] following numbers.
    let solution = []
    for (let j = 0; j <= min; j++) solution[j] = 0

    let bouquetSize = min + max + 1
    let streak = 0
    while (streak < min && bouquetSize < min * max) {

        // We look to see if we can find A way to write the current bouquetSize as a non-negative linear combination of m and n
        // We do so by seeing if bouquetsize is divible by "min."  If not, we subtract "max" then try again.
        // We must only perform at most min subtractions because if bouquetSize - (min + k)*max is divisible by min,
        // Then we have (bouquetSize - k*max) - min*max is divisible by min, and hence so too must bouquetSize - k*max.
        // We may also terminate our search if, after subtracting max, we reach a negative number.
        let count = 0
        while (bouquetSize - count * max >= 0 && count < min) {
            if ((bouquetSize - count * max) % min === 0) break
            count++
        }

        // clear out the first entry to make space for the new entry on the end:
        solution.shift()
        // if the search terminated due to meeting the failure conditions, wipe out the streak, and add that failed number to solution 
        if (bouquetSize - count * max < 0 || count === min) {
            streak = 0
            solution.push(bouquetSize)
        } else {
            streak++
            solution.push(`${max}(${count}) + ${min}(${(bouquetSize - count * max) / min})`)
        }
        // increment bouquetSize and continue
        bouquetSize++
    }
    return solution
}

const a = 17
const b = 31
console.log(gcd(a, b))
console.log(flowerBouquet(a, b))