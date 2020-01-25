/**
 * @class CabInvoiceGen
 * @classdesc Class to calculate cab fare
 */
class CabInvoiceGen {
  constructor() {
    this.MINFARE = 5; //minimum fare in INR for normal cab
    this.FAREPERKIM = 10; //fare per kilometer in INR for normal cab
    this.FAREPERMIN = 1; //fare per minute in INR for normal cab
    this.MINFARE_PREMIUM = 20; //minimum fare in INR for premium cab
    this.FAREPERKIM_PREMIUM = 15; //fare per kilometer in INR for premium cab
    this.FAREPERMIN_PREMIUM = 2; //fare per minute in INR for premium cab
    //dummy database
    this.db = [
      {
        userId: 1,
        rides: [{
          type: "normal",
          distance: 4,
          time: 4
        }, {
          type: "premium",
          distance: 2,
          time: 2
        }]
      }
    ];
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
   * @method to calculate fare for premium cab journey
   * @param  {} distance
   * @param  {} time
   */
  calcPremiumCabFare(distance,time){
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
        return this.MINFARE_PREMIUM;
      }

      totalFare = this.FAREPERKIM_PREMIUM * distance + totalTimeInMin * this.FAREPERMIN_PREMIUM;
      return totalFare;
    }
  }

  /**
   * @method to calculate multiple ride fares
   * @param  {} rides is an array of objects example - ride = [{distance:3,time:3}];
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
        if(rides[i].type == "normal"){
          agrTotalFare =
          agrTotalFare + this.calcCabFare(rides[i].distance, rides[i].time);
        }else{
          agrTotalFare =
          agrTotalFare + this.calcPremiumCabFare(rides[i].distance, rides[i].time);
        }
      }
      return agrTotalFare;
    }
  }

  /**
   * @method to generate invoice having details total number of rides, total fare, and avg fare per ride
   * @param  {} rides is an array of objects example - ride = [{distance:3,time:3}]; 
   */
  generateInvoice(rides) {
    if (rides == null) {
      //check if function has no arguments
      return true;
    } else if (typeof rides !== "object") {
      //check if function has valid number type arguments
      return true;
    } else {
      let invoice = {
        totalFare: 0,
        totalRides: 0,
        avgFarePerRide: 0
      };
      invoice.totalFare = this.multipleRideFare(rides);
      invoice.totalRides = rides.length;
      invoice.avgFarePerRide = invoice.totalFare / invoice.totalRides;

      return invoice;
    }
  }

  /**
   * @method to generate invoice for specific user
   * @param  {} userId
   */
  getUserInvoice(userId) {
    if (userId == null) {
      return true;
    } else if (typeof (userId) !== "number") {
      return true;
    } else {
      for (let i = 0; i < this.db.length; i++) {
        if (userId == this.db[i].userId) {
          let invoice = this.generateInvoice(this.db[i].rides);
          return invoice;
        } else {
          return false;
        }
      }
    }
  }

}


module.exports = CabInvoiceGen;
