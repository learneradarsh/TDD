const assert = require("chai").assert;
const userRegistration = require("./userReg");

describe("Test for user name validity", function() {
  it("should return true if valid username", function() {
    let isValid = userRegistration.isValidName("Adarsh");
    assert.equal(isValid, true);
  });

  it("should return false if invalid username", function() {
    let isValid = userRegistration.isValidName("abc1234");
    assert.equal(isValid, false);
  });
});

describe("Test for pincode validity", function() {
  it("should return true if valid pincode", function() {
    let isValid = userRegistration.isValidPincode("123456");
    assert.equal(isValid, true);
  });
  it("should return false if invalid pincode", function() {
    let isValid = userRegistration.isValidPincode("1234567");
    assert.equal(isValid, false);
  });
});
