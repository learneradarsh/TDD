const assert = require("chai").assert;
const convertFeetIntoInch = require("./convertFeetIntoInch");

describe("Test case for feet",function(){
    it("should return true for 0 feet and 0 feet",function(){
        let isEqual = convertFeetIntoInch(0);
        assert.equal(isEqual,0);
    });
    it("should return true if number is null",function(){
        let isNull = convertFeetIntoInch();
        assert.equal(isNull,true);
    })
    it("should return false if typeof number is not number",function(){
        let isNum = convertFeetIntoInch("4");
        assert.equal(isNum,false);
    });
});

describe("Test case for inch",function(){
    it("should return true if converted value is null",function(){
        let isNull = convertFeetIntoInch(null);
    assert.equal(isNull, true);
    });
});