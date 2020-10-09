function substitute() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
it.skip("Should return the correctly augmented string.", function() {
  const str = "My incredible string.";
  const result = substitute(str, "incredible", "amazing");
  expect(result).toBe("My amazing string.");
});
