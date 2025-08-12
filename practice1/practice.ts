// given current stock (product → quantity) and a list of orders (product → quantity), 
// return which orders cannot be fulfilled (product not in stock or insufficient quantity).

const stock = { apple: 10, orange: 5 };
const orders = { apple: 8, orange: 6, pear: 2 };

function fruitInStock(stock: object, orders: object): string[] {
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

fruitInStock(stock, orders)

