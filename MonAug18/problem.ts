// you are travelling around the world and currently in London's airport. 

// you are trying to get to Tokyo to meet your friend. However, you're extremely
    // short on cash and can only take cheap flights to get there. You are willing to make
    // any amount of layovers as long as you get there on the cheap.

// Given a list of cheap flights from a city to a city, return if it's possible to get to Tokyo
    // from London by taking any number of flights.

// Note: flights are not bidirectional. If there's a flight from London to Madrid, there may not be one
        // from Madrid to London.


type Flights = {
    from: string,
    to: string
}

function getDestination(flights:Flights[], start:string): string[]{
    return flights.filter(flight => flight.from ===start).map(flights => flights.to)
}

function hasPathToTokyo(flights: Flights[]) : boolean{ 
    const start = "London"
    const end = "Tokyo"

    // 1. find flights from London
    let flightsFromLondon = getDestination(flights, start)  // O(n)

    const reachableFromLondon : string[] = ["London"]
    while(flightsFromLondon.length > 0){
        // exclamation point because it kind of overrides undefined from pop
        //pull something off flightsfromLondon list
        const destination = flightsFromLondon.pop()!
        // O(n)
        if(reachableFromLondon.includes(destination)) continue
        if(destination === end) return true

        // add it to reachable list
        reachableFromLondon.push(destination)

        // add all flights out of this destination to flightsFromLondon list
        flightsFromLondon.push(...getDestination(flights, destination))

    }
  return false
} // TODO. Rename this and add types!



    // consider the order of flights. 
    // need to check if there is london in the "from" and the check the flights after that only for "to" = tokyo
    // let sum = 0
    // for (const flight of flights){
        
    //     if(flight.from != start){
    //         flights.pop()
    //     }
    //     if(flight.from == start){
    //         console.log(flights)
    //         break
            
    //     }
    // }

  

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

const flights1 = [
    { from: "London", to: "Madrid" },
    { from: "London", to: "Berlin" },
    { from: "Berlin", to: "Vladivostok" },
    { from: "Madrid", to: "London" },
    { from: "Vladivostok", to: "Tokyo" },
] // should return "true": London -> Berlin -> Vladivostok -> Tokyo
assert(true, hasPathToTokyo(flights1))

const flights2 = [
    { from: "Vladivostok", to: "Tokyo" },
    { from: "London", to: "Berlin" },
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
] // should return "false"
assert(false, hasPathToTokyo(flights2))

const flights3 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Berlin", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Tokyo", to: "London" },
]
assert(false, hasPathToTokyo(flights3))

const flights4 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Paris", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Paris", to: "Seoul" },
    { from: "Paris", to: "Beijing" },
    { from: "Paris", to: "Singapore" },
    { from: "Singapore", to: "Tokyo" },
] // should return "true" (London -> Paris -> Singapore -> Tokyo)
assert(true, hasPathToTokyo(flights4))


