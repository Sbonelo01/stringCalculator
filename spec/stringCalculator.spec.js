
var stringCalculator = require('../src/stringCalculator');
var stringCalc = new stringCalculator;

it('Empty string should return 0', () => {
  expect(stringCalc.Add("")).toBe(0);
});

it('1 should return 1', () => {
  expect(stringCalc.Add("1")).toBe(1);
});

it('1, 2 should return 3', () => {
  expect(stringCalc.Add("1,2")).toBe(3);
});

it('1, 2, 3, 4 should return 10', () => {
  expect(stringCalc.Add("1,2,3,4")).toBe(10);
});

it('2, 0, 0, 0, 5, 8 should return 15', () => {
  expect(stringCalc.Add("2,0,0,0,5,8")).toBe(15);
});

it('1\n2,3 should return 6', () => {
  expect(stringCalc.Add("1\n2,3")).toBe(6);
});

it('1, 2\n3\n4 should return 10', () => {
  expect(stringCalc.Add("1,2\n3\n4")).toBe(10);
});

it('-1, 2 should throw Negatives not allowed: -1', () => {
  expect(stringCalc.Add("-1,2")).toThrowError('Negatives not allowed: -1');
});

it('2, -4, 3, -5 should throw Negatives not allowed: -4,-5', () => {
  expect(stringCalc.Add("2,-4,3,-5")).toThrowError('Negetives not allowed: -4, -5');
});

it('1001, 2 should return 2', () => {
  expect(stringCalc.Add("1001,2")).toBe(2);
});
it('//;\n1;2 should return 3', () => {
  expect(stringCalc.Add("//;\n1;2")).toBe(3);
});

it('//;\n1;2,1\n5 should return 9', () => {
  expect(stringCalc.Add("//;\n1;2,1\n5")).toBe(9);
});