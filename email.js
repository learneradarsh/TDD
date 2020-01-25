/**
 * to validate email
 * @param  {} email
 */
function isValidEmail(email) {
  const pattern = {
    emailReg: /^(^[^.][\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){2,9})+)$/,
    errorAtRateReg: /(?=.*[@])/,
    tldDotReg: /@[a-zA-Z0-9%*()&!<>{}]([a-zA-Z0-9%*()&!<>{}]+)((\.([a-zA-Z]){0,9})+)$/,
    tldTwoCharReg: /@[a-zA-Z0-9%*()&!<>{}]([a-zA-Z0-9%*()&!<>{}]+)((\.([a-zA-Z]){2,9})+)$/,
    canNotDotReg: /^[^.]/,
    canNotSpecialReg: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9%*()&!<>{}]([%*()&!<>{}]+)((\.([a-zA-Z]){2,9})+)$/,
    onlyCharDigReg: /([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){2,9})+)$/,
    dblDotsReg: /([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){2,9})+)$/
  };
  const errorMsgs = {
    errorAtRate: "must contains “@” symbol",
    tldDot: "tld can not start with dot “.”",
    tldTwoChar: "last tld must contains at least two characters",
    canNotDot: "email’s 1st character can not start with “.”",
    canNotSpecial:
      "email’s is only allow character, digit, underscore and dash",
    onlyCharDig: "email’s tld is only allow character and digit",
    dblDots: "double dots “.” are not allow"
  };

  if (pattern.emailReg.test(email)) {
    return true;
  } else if (!pattern.errorAtRateReg.test(email)) {
    return errorMsgs.errorAtRate;
  } else if (!pattern.tldDotReg.test(email)) {
    return errorMsgs.tldDot;
  } else if (!pattern.tldTwoCharReg.test(email)) {
    return errorMsgs.tldTwoChar;
  } else if (!pattern.canNotDotReg.test(email)) {
    return errorMsgs.canNotDot;
  } else if (!pattern.canNotSpecialReg.test(email)) {
    return errorMsgs.canNotSpecial;
  } else if (!pattern.onlyCharDigReg.test(email)) {
    return errorMsgs.onlyCharDig;
  } else if (!pattern.dblDotsReg.test(email)) {
    return errorMsgs.dblDots;
  }
}

// console.log(isValidEmail("abc@.com.my"));
module.exports = isValidEmail;
