const assert = require("chai").assert;
const convertFeetIntoInch = require("./convertFeetIntoInch");

describe("Test case for equality",function(){
    it("should return true for 0 feet and 0 feet",function(){
        let isEqual = convertFeetIntoInch(0);
        assert.equal(isEqual,0);
    });
    it("should return true if number is null",function(){
        let isNull = convertFeetIntoInch();
        assert.equal(isNull,true);
    })
});