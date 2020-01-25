function measurement() {
  /**
   * to convery feet into inch
   * @param  {} number
   */
  function convertFeetIntoInch(number) {
    let convertedValue = 0;

    console.log("Welcome to Quantity Measurement");

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return false;
    }

    //convert feet into inch
    convertedValue = number * 12;
    return convertedValue;
  }

  
  /**
   * to convert feet into yard
   * @param  {} number
   */
  function convertFeetIntoYard(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return false;
    }

    convertedValue = number * (1/3);
    return convertedValue;

  }
  return {
    convertFeetIntoInch,
    convertFeetIntoYard
  };
}

module.exports = measurement();
