const findPath = (coordinates) => {
    let [x, y] = coordinates
    if (x === 0 && y === 0) return ""
    let dirs = ["N","E","S","W"]

    // rotate point ccw into 1st quadrant
    while (x < 0 || y <= 0) {
        let temp = y
        y = -x
        x = temp

        temp = dirs[3]
        for(let i = 3; i > 0; i--){
            dirs[i] = dirs[i-1]
        }
        dirs[0] = temp
    }

    // Reduce the work space further by considering only half of the 1st quadrant (y >= x)
    if(x > y){
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
    while(dist > Ti || (Ti + dist)%2 === 1){
        Ti += ++i
    }
    
    return Ti
}

const coordinates = [7, -10]
const result = findPath(coordinates)
console.log(result)