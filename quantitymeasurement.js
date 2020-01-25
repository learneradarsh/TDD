function measurement() {
  /**
   * @function to convert feet into inch
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
   * @function to convert feet into yard
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
  
  /**
   * @function to convert inch into yard
   * @param  {} number
   */
  function convertInchIntoYard(number) {
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

    convertedValue = number * (0.027778);
    return convertedValue;
  }
  
  /**
   * @function to convert yard into inch 
   * @param  {} number
   */
  function convertYardIntoInch(number) {
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

    convertedValue = number * 36;
    return convertedValue;
  }

  return {
    convertFeetIntoInch,
    convertFeetIntoYard,
    convertInchIntoYard,
    convertYardIntoInch
  };
}

module.exports = measurement();
