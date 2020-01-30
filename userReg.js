/**
 * user registration function
 */
function userRegistration() {
  /**
   * to check username is valid or not
   * @param  {string} userName
   */
  function isValidName(userName) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    return nameRegex.test(userName);
  }

  /**
   * to check pincode is valid or not
   * @param  {number} pincode
   */
  function isValidPincode(pincode) {
    let pincodeRegex = RegExp("^[0-9]{6}$");
    return pincodeRegex.test(pincode);
  }

  return {
    isValidName,
    isValidPincode
  };
}
module.exports = userRegistration();
