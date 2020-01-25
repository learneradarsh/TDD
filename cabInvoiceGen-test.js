const assert = require("chai").assert;
const calcCabFare = require("./cabInvoiceGen");

describe("test cases for calcCabFare agrument values validations",function(){
    it("should return true if calCabFare has no arguments",function(){
        let isNull = calcCabFare();
        assert.equal(isNull,true);
    });
    it("should return true if calcCabFare has partial agrs",function(){
        let isPartial = calcCabFare(2);
        assert.equal(isPartial,true);
    });
    it("should not equal if calcCabFare has all args",function(){
        let isAllArgs = calcCabFare(2,4);
        assert.notEqual(isAllArgs,true);
    });
    it("should return true if calcCabFare has invalid type args",function(){
        let isValid = calcCabFare('a','b');
        assert.equal(isValid,true);
    });
    it("should not equal if calcCabFare has valid type args",function(){
        let isValid = calcCabFare(2,4);
        assert.notEqual(isValid,true);
    })
});

describe("test cases for output of calcCabFare",function(){
    it("should return 5 if distance is zero",function(){
        let fare = calcCabFare(0,0);
        assert.equal(fare,5);
    });
    it("should return value if calcCabFare output is not null",function(){
        let isNull = calcCabFare(5,5);
        assert.notEqual(isNull,null);
    });
    it("should return 140 for distance=2km and time=2hrs",function(){
        let fare = calcCabFare(2,2);
        assert.equal(fare,140);
    });
});