import * as fs from 'fs'

/*
82728   61150
39850   94024
24609   43406
*/
// 24609 -> 43406 19000?
// 39850 -> 61150 22000?
// 82728 -> 94024 12000?
// 19000 + 22000 + 12000 = 53000

const filePath: string = "input.txt"
const fileContent: string = fs.readFileSync(filePath, 'utf-8')

const lines: string[] = fileContent.split('\n')
const leftArray: number[] = []
const rightArray: number[] = []

let sum = 0

lines.forEach(element => {
    const splitLine = element.split("   ")
    leftArray.push(Number(splitLine[0]))
    rightArray.push(Number(splitLine[1]))
});

leftArray.sort()
rightArray.sort()

for(let i = 0; i<leftArray.length; i++){
    let diff = Math.abs(leftArray[i]-rightArray[i])
    sum += diff
}

console.log(leftArray)
console.log(rightArray)

console.log(sum)