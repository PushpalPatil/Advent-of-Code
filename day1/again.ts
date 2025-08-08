import * as fs from "fs";

//load file path
const filePath:string = "input.txt"

// load file contents using fs and encoding
const fileContent:string = fs.readFileSync(filePath, 'utf-8')

//split content by each line
const lines:string[] = fileContent.split('\n')
console.log(lines)
// need to split content in left and right array
const leftArray:number[] = []
const rightArray:number[] = []
let sum = 0
// use for each loop to iterate through each [""] in lines and Number-ify and add to left/right arr

lines.forEach(element => {
    const splitLine = element.split("   ")
    leftArray.push(Number(splitLine[0]))
    rightArray.push(Number(splitLine[1]))
    
});

leftArray.sort()
rightArray.sort()

for(let i = 0; i<leftArray.length; i++){
    const diff = Math.abs(leftArray[i] - rightArray[i])
    sum += diff
}

console.log(sum)