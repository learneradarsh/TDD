/**
 * @class CabInvoiceGen
 * @classdesc Class to calculate cab fare
 */
class CabInvoiceGen {
  constructor() {
    this.MINFARE = 5; //minimum fare in INR
    this.FAREPERKIM = 10; //fare per kilometer in INR
    this.FAREPERMIN = 1; //fare per minute in INR
  }

  /**
   * @method to calculate fare for the journey by using distance and time
   * @param  {} distance in kilometers
   * @param  {} time in hours
   */
  calcCabFare(distance, time) {
    let totalFare = 0; //total fare for a ride in INR
    let totalTimeInMin = 0; // total time in minutes
    if (distance == null || time == null) {
      //check if function has no arguments
      return true;
    } else if (typeof distance === undefined || typeof time === undefined) {
      //check if function has partial arguments
      return true;
    } else if (typeof distance !== "number" || typeof distance !== "number") {
      //check if function has valid number type arguments
      return true;
    } else {
      totalTimeInMin = time * 60;

      if (distance === 0 || time === 0) {
        return this.MINFARE;
      }

      totalFare = this.FAREPERKIM * distance + totalTimeInMin * this.FAREPERMIN;
      return totalFare;
    }
  }

  /**
   * @method to calculate multiple ride fares
   * @param  {} rides is an object having distance and time property
   */
  multipleRideFare(rides) {
    if (rides == null) {
      //check if function has no arguments
      return true;
    } else if (typeof rides !== "object") {
      //check if function has valid number type arguments
      return true;
    } else {
      let agrTotalFare = 0;
      if (rides.length === 0) {
        return agrTotalFare;
      }
      for (let i = 0; i < rides.length; i++) {
        agrTotalFare =
          agrTotalFare + this.calcCabFare(rides[i].distance, rides[i].time);
      }
      return agrTotalFare;
    }
  }
}

module.exports = CabInvoiceGen;
