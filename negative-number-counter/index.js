/* 
How many negative values ​​are in this list?
[ [-4, 5, 4, 6, -80], [99, -1111, 5, 6], [0, 1], [ [1, 1], [-1, -2] ] ]
*/

function solution(arr) {
    let flatArr = arr.flat(Infinity)
    let negativeCounter = 0
    for (let i = 0; i <= flatArr.length; i++) {
        if (flatArr[i] < 0) {
            negativeCounter += 1
        }
    }
    console.log(negativeCounter)
}

let input = [[-4, 5, 4, 6, -80], [99, -1111, 5, 6], [0, 1], [[1, 1], [-1, -2]]]
solution(input)