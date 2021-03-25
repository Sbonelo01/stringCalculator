"use strict";

module.exports = class StringCalculator {
  add(stringNumber) {
    if (stringNumber.length > 0) {
      var greaterThan1000 = /[1-9]\d{3,}/;
      var invalid = /\s(?=\/\/)|\d(?=\/\/)|\W$/;

      if (!stringNumber) {
        return 0;
      }

      if (invalid.test(stringNumber) == true) {
        throw new Error("ERROR: invalid input");
      }

      if (greaterThan1000.test(stringNumber) == true) {
        var oneThousand = stringNumber.match(greaterThan1000);
        stringNumber = stringNumber.replace(oneThousand, 0);
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
        if (splitString[i] < 1000) sum += parseInt(splitString[i]);
      }

      if (neg.length > 0) {
        throw new Error("Negetives not allowed" + neg);
      }
      return sum;
    }
  }
};

// add('//;n1000;1;2')
