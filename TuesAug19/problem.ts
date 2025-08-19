// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.


function calculateString(arg: string): number {

    const separator = " "
    const stringArray = arg.split(separator)
    let result = 0
    // for each 
    // check if int or not
    // check what type of string it is : - / + / * / / / ( / )

    let subtract = false
    let add = false
    let multiply = false
    let divide = false
    let operator: string | undefined = undefined
    let num = 0

    for (const char of stringArray) {

        if (char === "-") {
            subtract = true
        }
        if (char === "*") {
            multiply = true
        }
        if (char === "+") {
            add = true
        }
        if (char === "/") {
            divide = true
        }

        if (parseInt(char)) {
            num = parseInt(char)
            console.log("num", num)
            if (subtract) {
                result -= num
                subtract = false
            } else if (add) {
                result += num
                add = false
            } else if (multiply) {
                result *= num
                multiply = false
            } else if (divide) {
                result /= num
                divide = false
            } else {
                result = num
            }
        } else {
            operator = char
        }
    }
    console.log(result)
    return result

} // TODO. Rename this and add types!

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

assert(20, calculateString("5 * 4"))
assert(2, calculateString("66 / 33"))
assert(3, calculateString("4 - 1"))
assert(53, calculateString("50 + 3"))
assert(7, calculateString("3 - 1 + 5"))
assert(1, calculateString("5 * 2 / 10"))