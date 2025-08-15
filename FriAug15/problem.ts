/*

a bakery tracks daily items with:

name (string)

cost (number, cost to make)

price (number, selling price)

sold (number, units sold)

given an array of items for a day, return an array of the names of items that made net profit at least targetProfit.
net profit for an item = (price - cost) * sold.
if no items meet the target, return [].
*/

// test case 1
const day1 = [
    { name: "croissant", cost: 1.2, price: 2.5, sold: 30 },
    { name: "bagel", cost: 0.5, price: 1.5, sold: 20 },
    { name: "muffin", cost: 0.8, price: 2.0, sold: 10 }
];
console.log(profitableItems(day1, 20));
  // expected: ["croissant", "bagel"]

  // test case 2
const day2 = [
    { name: "donut", cost: 0.6, price: 1.0, sold: 15 },
    { name: "brownie", cost: 1.0, price: 3.0, sold: 15 },
    { name: "tart", cost: 2.0, price: 5.0, sold: 1 }
];
console.log(profitableItems(day2, 15));
  // expected: ["brownie"]

type DailyItemsDetails = {
    name: string,
    cost: number,
    price: number,
    sold: number
}

function profitableItems(day: DailyItemsDetails[], minProfit:number):string[]{
    
    const result: string[] = []         // O(1)

    for(const dItem of day){            // O(N)

        const profit = (dItem.price - dItem.cost) * dItem.sold
        if(profit >= minProfit){
            result.push(dItem.name)
        }
        
    }
    return result
}


/* 

time: 

return day.filter( (dItems) => 
    {
    const profit = (dItem.price - dItem.cost) * dItem.sold
    return profit >= minProfit
    })
    .map(dItem => dItem.name)

*/
