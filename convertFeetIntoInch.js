/**
 * to convery feet into inch
 * @param  {} number
 */
function convertFeetIntoInch(number) {
  let convertedValue = null;

  console.log("Welcome to Quantity Measurement");

  //when number is zero
  if (number == 0) {
    return 0;
  }

  //when number is null
  if (number == null) {
    return true;
  }

  //number type check
  if (typeof number != "number") {
    return false;
  }

  //when converted value is null
  if (convertedValue == null) {
    return true;
  }
  //convert feet into inch
  convertedValue = number * 12;
  return convertedValue;
}

module.exports = convertFeetIntoInch;
