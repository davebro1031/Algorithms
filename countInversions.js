const merge = (arr, p, q, r, n) => {

}

const countInversions = (arr, p, r, n) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        countInversions(arr, p, q, n)
        countInversions(arr, q + 1, r, n)

    }
}

