const assert = require("chai").assert;
const CabInvoiceGen = require("./cabInvoiceGen");

const cabInvoiceGen = new CabInvoiceGen();

describe("test cases for calcCabFare agrument values validations", function () {
  it("should return true if calCabFare has no arguments", function () {
    let isNull = cabInvoiceGen.calcCabFare();
    assert.equal(isNull, true);
  });
  it("should return true if calcCabFare has partial agrs", function () {
    let isPartial = cabInvoiceGen.calcCabFare(2);
    assert.equal(isPartial, true);
  });
  it("should not equal if calcCabFare has all args", function () {
    let isAllArgs = cabInvoiceGen.calcCabFare(2, 4);
    assert.notEqual(isAllArgs, true);
  });
  it("should return true if calcCabFare has invalid type args", function () {
    let isValid = cabInvoiceGen.calcCabFare("a", "b");
    assert.equal(isValid, true);
  });
  it("should not equal if calcCabFare has valid type args", function () {
    let isValid = cabInvoiceGen.calcCabFare(2, 4);
    assert.notEqual(isValid, true);
  });
});

describe("test cases for output of calcCabFare", function () {
  it("should return 5 if distance is zero", function () {
    let fare = cabInvoiceGen.calcCabFare(0, 0);
    assert.equal(fare, 5);
  });
  it("should return value if calcCabFare output is not null", function () {
    let isNull = cabInvoiceGen.calcCabFare(5, 5);
    assert.notEqual(isNull, null);
  });
  it("should return 140 for distance=2km and time=2hrs", function () {
    let fare = cabInvoiceGen.calcCabFare(2, 2);
    assert.equal(fare, 140);
  });
});

describe("test cases for multipleRideFare", function () {
  it("should return true if multipleRideFare has no arg", function () {
    let isNull = cabInvoiceGen.multipleRideFare();
    assert.equal(isNull, true);
  });
  it("should return true if multipleRideFare has invalid type arg", function () {
    let isValid = cabInvoiceGen.multipleRideFare("23");
    assert.equal(isValid, true);
  });
  it("should return 0 for 0 rides", function () {
    let rides = [];
    let totalRides = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(totalRides, 0);
  });
  it("should not equal to null if agrTotalFare is not null", function () {
    let rides = [
      {
        type: "normal",
        distance: 4,
        time: 4
      }
    ];
    let isNull = cabInvoiceGen.multipleRideFare(rides);
    assert.notEqual(isNull, null);
  });
  it("should return 630 if calculated correct output", function () {
    let rides = [
      {
        type: "normal",
        distance: 4,
        time: 4
      },
      {
        type: "normal",
        distance: 5,
        time: 5
      }
    ];
    let agrFare = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(agrFare, 630);
  });
  it("should return 10 if minimum fare condition is working for 2 rides where total distance and time is zero", function () {
    let rides = [
      {
        type: "normal",
        distance: 0,
        time: 0
      },
      {
        type: "normal",
        distance: 0,
        time: 0
      }
    ];
    let agrFare = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(agrFare, 10);
  });
});

describe("test cases for generateInvoice", function () {
  it("should return true if generateInvoice has no arg", function () {
    let isNull = cabInvoiceGen.generateInvoice();
    assert.equal(isNull, true);
  });
  it("should return true if generateInvoice has invalid type arg", function () {
    let isValid = cabInvoiceGen.generateInvoice("23");
    assert.equal(isValid, true);
  });
  it("should return totalRides 2, totalFare 2, and avgFarePerRide 1", function () {
    let rides = [{
      type: "normal",
      percentage: 4,
      time: 4
    }, {
      type: "normal",
      percentage: 5,
      time: 5
    }];
    let invoice = cabInvoiceGen.generateInvoice(rides);
    assert.equal(invoice.totalFare, 2);
    assert.equal(invoice.totalRides, 2);
    assert.equal(invoice.avgFarePerRide, 1);
  });
});

describe("test cases for getUserInvoice", function () {
  it("should return true if userid is null", function () {
    let isExist = cabInvoiceGen.getUserInvoice();
    assert.equal(isExist, true);
  });
  it("should return if argument is invalid", function () {
    let isValid = cabInvoiceGen.getUserInvoice("a");
    assert.equal(isValid, true);
  });
  it("should return false if user doesn't exist", function () {
    let isExist = cabInvoiceGen.getUserInvoice(2);
    assert.equal(isExist, false);
  });
  it("should not return false if user exists", function () {
    let isExist = cabInvoiceGen.getUserInvoice(1);
    assert.notEqual(isExist, false);
  });
  it("should not equal to null", function () {
    let isNull = cabInvoiceGen.getUserInvoice(1);
    assert.notEqual(isNull, null);
  });
  it("should return totalFare 550, totalRides 2, avgFarePerRide 275", function () {
    let invoice = cabInvoiceGen.getUserInvoice(1);
    assert.equal(invoice.totalFare, 550);
    assert.equal(invoice.totalRides, 2);
    assert.equal(invoice.avgFarePerRide, 275);
  });
});

describe("test cases for calcPremiumCabFare",function(){
  it("should return 20 if distance is zero", function () {
    let fare = cabInvoiceGen.calcPremiumCabFare(0, 0);
    assert.equal(fare, 20);
  });
  it("should return value if calcPremiumCabFare output is not null", function () {
    let isNull = cabInvoiceGen.calcPremiumCabFare(5, 5);
    assert.notEqual(isNull, null);
  });
  it("should return 675 if distance - 5 and time - 5",function(){
    let premiumFare = cabInvoiceGen.calcPremiumCabFare(5,5);
    assert.equal(premiumFare,675);
  });
});