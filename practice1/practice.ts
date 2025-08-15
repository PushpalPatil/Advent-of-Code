// given current stock (product → quantity) and a list of orders (product → quantity), 
// return which orders cannot be fulfilled (product not in stock or insufficient quantity).

const stock = { apple: 10, orange: 5 };
const orders = { apple: 8, orange: 6, pear: 2 };

function findUnfulfilledOrders(stock: object, orders: object): string[] {
    const result: string[] = []

    for (const productName in orders) {
        if (orders[productName] <= stock[productName]) {

            console.log(productName + " is in stock quantity")
        }
        else if (orders[productName] > stock[productName]) {
            result.push(productName)
            console.log(productName + " has insufficient quantity")
        }

        else {
            result.push(productName)
            console.log(productName + " not in stock ")
        }
    }
    console.log(result + " cannot be fulfilled")

    return result
}

// findUnfulfilledOrders(stock, orders)



function findUnfulfilledOrders2(stock: object, orders: object): string[] {
    const result: string[] = []

    for (const [itemName, orderAmount] of Object.entries(orders)) {

        const amountInStock = stock[itemName]
        const isSufficient = amountInStock >= orderAmount

        if(amountInStock === undefined || amountInStock < orderAmount){
            result.push(itemName)
        }
        console.log("amount of ", itemName, " in stock ", amountInStock)

    }
    return result
}


findUnfulfilledOrders2(stock, orders)


function functionalUnfulfilledOrders(orders:object, stock:object):string[]{

    return Object.entries(orders)                                        // [ ["apple", 8] , ["orange", 6] , ["pear", 2] ]
    .filter(( [orderName, orderAmount] ) => {
        const stockAmount = stock[orderName]
        return stockAmount === undefined || stockAmount < orderAmount   //  [ ["orange", 6], ["pear", 2] ]
    })
    .map(orderEntry => orderEntry[0])                                   // [ [ "orange" , "pear" ] ]
}

// filter( orderName => ( stock[orderName] ?? 0 ) stock[orderName] < orders[orderName])

function simplerFindUnfulfilledOrders(orders:object, stock:object):string[]{

    /*

    return Object.keys(orders)                                                                        //  [ "apple", "orange" , "pear" ]
    .filter( orderName => stock[orderName] === undefined || stock[orderName] < orders[orderName])     // [ [ "orange" , "pear" ] ]
    
    */

    return Object.keys(orders)
    .filter ( (orderName) => {
        const orderAmt = orders[orderName]
        const stockAmt = stock[orderName]
        return stockAmt === undefined || stockAmt < orderAmt
    } )


}