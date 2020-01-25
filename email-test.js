const assert = require("chai").assert;
const isValidEmail = require("./email");
let isContains;

describe("test case to check email", function() {
  it("should return error if email doesn't contains @", function() {
    isContains = isValidEmail("abc");
    assert.equal(isContains, "must contains “@” symbol");
  });
  it("should return error if tld starts with '.'", function() {
    isContains = isValidEmail("abc@.com.my");
    assert.equal(isContains,"tld can not start with dot “.”");
  });
  it("should return error if tld contains only one character",function(){
      isContains = isValidEmail("abc123@gmail.a");
      assert.equal(isContains,"last tld must contains at least two characters");
  });
  it("should return error if tld starts with dot",function(){
       isContains = isValidEmail("abc123@.com");
       assert.equal(isContains,"tld can not start with dot “.”");

  });
  it("should return error if tld starts with dot",function(){
    isContains = isValidEmail("abc123@.com.com");
    assert.equal(isContains,"tld can not start with dot “.”");
  });
  it("should return error if first character of email starts with dot",function(){
      isContains = isValidEmail(".abc@abc.com");
      assert.equal(isContains,"email’s 1st character can not start with “.”");
  });
  it("should return error if email is containing character,digit, underscore, and dash",function(){
      isContains = isValidEmail("abc()*@gmail.com");
      assert.equal(isContains,"email’s is only allow character, digit, underscore and dash");
  });
  it("should return error if tld contains any special chars",function(){
      isContains = isValidEmail("abc@%*.com");
      assert.equal(isContains,"email’s tld is only allow character and digit");
  });
  it("should return error if email contains double dot",function(){
    isContains = isValidEmail("abc..2002@gmail.com");
    assert.equal(isContains,"double dots “.” are not allow");
  });
});
