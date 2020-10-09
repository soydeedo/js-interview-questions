// Takes
function getMaxes() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
it.skip("should take the max of each subarray in the original array and return a new array with those maxes", () => {
  const original = [[5, 10, 2, 14], [1], [9, 28, 3], [1, 2, 3], [3, 2, 1]];
  const expected = [14, 1, 28, 3, 3];

  expect(getMaxes(original)).toEqual(expected);
});
