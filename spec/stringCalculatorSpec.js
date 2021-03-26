var StringCalculator = require('../src/stringCalculator');
var stringCalc = new StringCalculator;

describe("String calculator", () => {
  it("should add two integers passed into a string and return the sum as an integer", () => {
    expect(stringCalc.add("")).toBe(0);
    expect(stringCalc.add("1")).toBe(1);
    expect(stringCalc.add("1,1")).toBe(2);
  });

  it("should add multiple integers passed into a string and return the sum as an integer", () => {
    expect(stringCalc.add("1,2,3,4")).toBe(10);
  });

  it("should handle new lines between integers passed into a string and return the sum as an integer", () => {
    expect(stringCalc.add("1\n2,3")).toBe(6);
  });

  it("should handle different delimiters", () => {
    expect(stringCalc.add("//;\n1;2")).toBe(3);
    expect(stringCalc.add("//4\n142")).toBe(3);
  });

  it("should handle negative integers", () => {
    expect(stringCalc.add("-1,-2,3,4")).toBe("Error: Negatives not allowed -1,-2");
  });

  it("should ignore integers greater than or equal to 1000", () => {
    expect(stringCalc.add("1\n1000,1,2")).toBe(4);
  });

  it("should ignore integers greater than or equal to 1000", () => {
    expect(stringCalc.add("//;\n1000;1;2")).toBe(3);
  });

  it("should support delimiters of any length", () => {
    expect(stringCalc.add("//***\n1***2***3")).toBe(6);
  });

  it("should support different delimiters of any length", () => {
    expect(stringCalc.add("//[:D][%]\n1:D2%3")).toBe(6);
  });

  it("should support different delimiters of any length", () => {
    expect(stringCalc.add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  it("should support different delimiters of any length", () => {
    expect(stringCalc.add("//[(-_-')][%]\n1(-_-')2%3")).toBe(6);
  });

  it("should support different delimiters of any length", () => {
    expect(stringCalc.add("//[abc][777][:(]\n1abc27773:(1")).toBe(7);
  });

  it("should validate input", () => {
    expect(stringCalc.add("1,2,E,$")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("1\n1,@")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("1\n,#")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("  1\n,#")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("//;\n1000;1;2;")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("   //;\n1000,1;2")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("1,2,3//;\n1000,1;2")).toBe("ERROR: invalid input");
  });

  it("should validate input", () => {
    expect(stringCalc.add("//[\*][%]\n1\*2%3")).toBe(6);
  });
});