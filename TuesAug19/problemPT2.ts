// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.

function calc(arg: string): number {
    const separator = " "
    const stringArray = arg.split(separator)

    let accumulator: number | undefined = undefined
    let operator: string | undefined = undefined

    for (const char of stringArray) {

        if (accumulator === undefined) {
            accumulator = Number(char)
        }
        else if (operator === undefined) {
            operator = char
        }
        else {
            // 1. compute number 
            accumulator = applyOperator(operator, accumulator, Number(char))
            operator = undefined

        }

    } // TODO. Rename this and add types!
    return accumulator!
}
function applyOperator(operator: string, accumulator: number, num: number):number {

    if (operator === "-") {
        accumulator -= num
    }
    if (operator === "+") {
        accumulator += num
    }
    if (operator === "*") {
        accumulator *= num
    }
    if (operator === "/") {
        accumulator /= num
    }

    return accumulator


}
function assert2(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

assert2(20, calc("5 * 4"))
assert2(2, calc("66 / 33"))
assert2(1, calc("2 - 1"))
assert2(50, calc("50 + 0"))
assert2(1, calc("3 - 1 - 1"))
assert2(10, calc("5 * 4 / 2"))