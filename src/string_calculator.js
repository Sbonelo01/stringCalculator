"use strict";

module.exports = class StringCalculator {
  add(stringNumber) {

    let invalid = /\s(?=\/\/)|\d(?=\/\/)|\W$/

    if (!stringNumber) return 0;
    if ( invalid.test(stringNumber) == true ) {
      throw new Error("ERROR: invalid input")
    }

    if (stringNumber.indexOf("//") == 0) {
      var delimiter = new RegExp(
          "\n|,|" + stringNumber.substring(2, stringNumber.indexOf("\n"))
        ),
        subString = stringNumber.substring(
          stringNumber.indexOf("\n") + 1,
          stringNumber.length
        ),
        splitString = subString.split(delimiter);
    } else {
      var splitString = stringNumber.split(/,|\n/);
    }

    var sum = 0,
      neg = [];

    for (var i = 0; i < splitString.length; i++) {
      if (parseInt(splitString[i]) < 0) neg.push(splitString[i]);
      else if (splitString[i] < 1001) sum += parseInt(splitString[i]) 
    }
    if (neg.length > 0) {
      throw new Error("Negetives not allowed" + neg);
    }
    return sum;
  }
};
