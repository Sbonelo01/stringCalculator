module.exports = class StringCalculator {

  add(str) {
    
    const isDigit = /\d/,
           allDigits = /\d*/g,
           allNonDigits = /\D/g,
           allNegativeNumbers = /-\d*/g

    let sum = 0,
        numbers = [],
        negativeNumbers = [],
        delimeterRegex = /(?<=\/\/)(.*)(?=\n)/g,
        multipleDelimiters = /\[[^\]]*]/g,
        afterNewline = str.substring(str.indexOf("\n") + 1, str[str.length]),
        beforeNewline = str.substring(0, str.indexOf("\n"))
  
    if (delimeterRegex.test(str)) {
      let delimeter = str.match(delimeterRegex)[0];
  
      if (multipleDelimiters.test(str)) {
        let delimeters = str.match(/(?<=\[).+?(?=\])/g);
        delimeters.forEach((delimeter) => {
          str = str.split(delimeter).join(",");
          numbers = str.split("");
        });
      } else if (
        delimeter &&
        isDigit.test(afterNewline[0]) &&
        isDigit.test(afterNewline[afterNewline.length - 1]) &&
        str[0] === "/" &&
        str[1] === "/"
      ) {
        for (let i = 0; i < afterNewline.length; i++) {
          if (i % 2 > 0 && afterNewline[i] === delimeter) {
            afterNewline = afterNewline.replace(afterNewline[i], " ");
          }
        }
  
        let chars = afterNewline.split(" ").join("");
  
        if (allNonDigits.test(chars)) {
          var delimeterIndex = str.indexOf(delimeter);
          delimeter = str[delimeterIndex];
        }
        numbers = str.split(delimeter);
      } else {
        return "ERROR: invalid input";
      }
    }
  
    if (allNegativeNumbers.test(str)) {
      negativeNumbers = str.match(allNegativeNumbers);
      return "Error: Negatives not allowed " + negativeNumbers.join(",");
    }
  
    if (str.includes("\n") && !delimeterRegex.test(str)) {
      const chars = afterNewline.split(",").join("");
  
      if (allNonDigits.test(beforeNewline))
        return "ERROR: invalid input";
      if (allNonDigits.test(chars)) return "ERROR: invalid input";
  
      numbers = str.match(allDigits);
    }
  
    if (numbers.length < 1) {
      const chars = str.split(",").join("");
      if (allNonDigits.test(chars)) return "ERROR: invalid input";
      numbers = str.match(allDigits);
    }
  
    numbers.forEach((char) => {
      let digit = parseInt(char);
      if (digit && digit < 1000) sum += digit;
    });
  
    return sum;
  }

}