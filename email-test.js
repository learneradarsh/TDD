const assert = require("chai").assert;
const isValidEmail = require("./email");

describe("test case to check email",function(){
    it("should return false if email doesn't contains @",function(){
        let isContains = isValidEmail("abc");
        assert.equal(isContains,false);
    });
});