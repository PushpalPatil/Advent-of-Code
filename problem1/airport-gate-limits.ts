const flightAssignments = {
  "AA101": "G1",
  "AA102": "G1",
  "BA602": "D4",
  "BA201": "G2",
  "DL303": "G3",
  "AA406": "D4",
  "AA930": "D4",
  "UA777": "H1",
  "UA778": "H1",
  "LH400": "J2"
};

const flightPassengers = {
  "AA101": 85,
  "AA102": 50,
  "BA201": 105,
  "DL303": 6,    
  "BA602": 10, 
  "AA406": 65,
  "AA930": 25,
  "UA777": 61,
  "UA778": 62,
  "LH400": 120
};

const capacity = 120;
const expectedResult = ["G1", "H1"]

const flightAssignments2 = {
  "F1": "A1",
  "F2": "A1",
  "F3": "B2",
  "F4": "B2",
  "F5": "C2"
};

const flightPassengers2 = {
  "F1": 30,
  "F2": 50,
  "F3": 40,
  "F4": 36,
  "F5": 75
};

const capacity2 = 75
const expectedResult2 = ["A1", "B2"]

const flightAssignments3 = {
  "A1": "G1",
  "A2": "G1",
  "B1": "G2",
  "C1": "G3"
};

const flightPassengers3 = {
  "A1": 60,  
  "A2": 60,  
  "B1": 0,   
  "C1": 120,  
  "X999": 999 
};

const capacity3 = 120;
const expectedResult3 = []

function findOverflowedGates(flightAssignments: Map<string,string>, flightPassengers: object, capacity:number){

    const gateFlightMap: Map<string, string[]> = new Map()

    // 1. Generate a map of which flights were at which gate 
    // { "G1": ["AA101", "AA102"]}

    for(const flight in flightAssignments){

        const assignedGate = flightAssignments[flight]
        if(gateFlightMap.has(flightAssignments[flight])){
            gateFlightMap.get(flightAssignments[flight])?.push(flight)
        }
        else{
            gateFlightMap.set(flightAssignments[flight], [flight])
        }

    }

}

const atCapacity = (flightPassengers, flightAssignments, capacity, expResult) =>{

    console.log(flightPassengers)
    console.log(flightAssignments)

    for(let i = 0; i<flightPassengers.length;i++){

    }




}


atCapacity(flightPassengers, flightAssignments, capacity, expectedResult)