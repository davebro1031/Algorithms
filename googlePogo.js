const findPath = (coordinates) => {
    let [x, y] = coordinates
    if (x === 0 && y === 0) return ""
    let dirs = ["N", "E", "S", "W"]

    // rotate point ccw into 1st quadrant
    while (x < 0 || y <= 0) {
        let temp = y
        y = -x
        x = temp

        temp = dirs[3]
        for (let i = 3; i > 0; i--) {
            dirs[i] = dirs[i - 1]
        }
        dirs[0] = temp
    }

    // Reduce the work space further by considering only half of the 1st quadrant (y >= x)
    if (x > y) {
        let temp = x
        x = y
        y = temp

        temp = dirs[0]
        dirs[0] = dirs[1]
        dirs[1] = temp

        temp = dirs[2]
        dirs[2] = dirs[3]
        dirs[3] = temp
    }

    // define distance from origin variable
    let dist = x + y
    let i = 1
    let Ti = 1
    while (dist > Ti || (Ti + dist) % 2 === 1) {
        Ti += ++i
    }

    let j = i
    let north = []
    while (y > 0) {
        if (y >= j) {
            y -= j
            north.unshift(j--)
        } else {
            j--
        }
    }


    let west = []
    let diff = (Ti - dist) / 2

    j = i
    while (diff > 0) {
        if (north.includes(j)) {
            j--
            continue 
        }
        if (diff >= j) {
            diff -= j
            west.unshift(j--)
        } else {
            j--
        }
    }

    let result = ""
    for (let j = 1; j <= i; j++) {
        if (north.includes(j)) {
            result += dirs[0]
        } else if (west.includes(j)) {
            result += dirs[3]
        } else {
            result += dirs[1]
        }
    }
    return result
}

const testPath = (str) => {
    let x = 0, y = 0
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "N":
                y += (i + 1)
                break
            case "S":
                y -= (i + 1)
                break
            case "E":
                x += (i + 1)
                break
            case "W":
                x -= (i + 1)
        }
    }
    return [x, y]
}

const coordinates = [-114, -319]
const result = findPath(coordinates)
console.log(result)
const test = testPath(result)
console.log(test)
