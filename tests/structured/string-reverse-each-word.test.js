function reverseEachWord(str) {
  //return str.split(" ").map(x => x.split("").reverse().join("")).join(" ");
}

// DO NOT CHANGE THIS (except the skips)
it.skip("Should return the correctly augmented string.", function() {
  const str = "Welcome to this Javascript Guide!";
  const result = reverseEachWord(str);
  expect(result).toBe("emocleW ot siht tpircsavaJ !ediuG");
});