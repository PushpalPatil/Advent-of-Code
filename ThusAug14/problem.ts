// given events as minutes-from-midnight and now (same units), 
// return the title of the soonest event with start ≥ now; if none, return null.

const events = [
  { title: "standup", start: 540 },   // 9:00
  { title: "happyhour", start: 1100},
  { title: "1:1",     start: 600 },   // 10:00
  { title: "retro",   start: 900 }    // 15:00
];

const now = 601;


function findSoonestEvent( events:object[], now:number) : string {

    
    const sortedEvents = events.slice().sort()

    console.log(sortedEvents)


    
    return ""
    
}
// expected: "retro"  // 600 has passed; next is 900


findSoonestEvent(events, now)