function countNumericDigits() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
it.skip("Should correctly count the number of digits in the string.", function() {
  let result;

  result = countNumericDigits("abasdfbag");
  expect(result).toBe(0);

  result = countNumericDigits("abase0dfbag");
  expect(result).toBe(1);

  result = countNumericDigits("ab2asdf4bag5");
  expect(result).toBe(3);

  result = countNumericDigits("ab22asdf4bag5");
  expect(result).toBe(4);
});
