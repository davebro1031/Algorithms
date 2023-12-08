
const findPath = (coordinates) => {
    let [x, y] = coordinates.split(" ")
    return x*y
}

const coordinates = "3 -7"
const result = findPath(coordinates)
console.log(result)