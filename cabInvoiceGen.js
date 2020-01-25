/**
 * @function to calculate fare for the journey by using distance and time
 * @param  {} distance in kilometers
 * @param  {} time in hours
 */
function calcCabFare(distance, time) {
  if (distance == null || time == null) {
    //check if function has no arguments
    return true;
  } else if (typeof distance === undefined || typeof time === undefined) {
    //check if function has partial arguments
    return true;
  } else if (typeof distance != "number" || typeof distance != "number") {
    //check if fucntion has valid number type
    return true;
  } else {
    const MINFARE = 5; //minimum fare in INR
    const FAREPERKIM = 10; //fare per kilometer in INR
    const FAREPERMIN = 1; //fare per minute in INR

    let totalFare = 0; //total fare for a ride in INR
    let totalTimeInMin = 0; // total time in minutes

    totalTimeInMin = time * 60;

    if (distance === 0 || time === 0) {
      return MINFARE;
    }

    totalFare = FAREPERKIM * distance + totalTimeInMin * FAREPERMIN;
    return totalFare;
  }
}

console.log(calcCabFare(2,2));
module.exports = calcCabFare;
