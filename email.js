/**
 * to validate email
 * @param  {} email
 */
function isValidEmail(email) {
  const pattern = {
    emailReg: /^(^[^.][\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){2,9})+)$/,
    errorAtRateReg: /(?=.*[@])/,
    tldDotReg: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){0,9})+)$/,
    tldTwoCharReg: /^([\w-]|(?<!\.)\.)+[a-zA-Z0-9]@[a-zA-Z0-9]([\w\-]+)((\.([a-zA-Z]){2,9})+)$/,
    canNotDotReg: /^[^.]/
  };
  const errorMsgs = {
    errorAtRate: "must contains “@” symbol",
    tldDot: "tld can not start with dot “.”",
    tldTwoChar: "last tld must contains at least two characters",
    canNotDot: "email’s 1st character can not start with “.”"
  };

  if (pattern.emailReg.test(email)) {
    return true;
  } else if (!pattern.errorAtRateReg.test(email)) {
    return errorMsgs.errorAtRate;
  } else if (!pattern.tldDotReg.test(email)) {
    return errorMsgs.tldDot;
  } else if (!pattern.tldTwoCharReg.test(email)) {
    return errorMsgs.tldTwoChar;
  }else if(!pattern.canNotDotReg.test(email)){ //till 6th
    return errorMsgs.canNotDot;
  }
}

console.log(isValidEmail("abc()*@gmail.com"));
module.exports = isValidEmail;
