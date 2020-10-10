function emptyArray(arr) {
  // not sure why it returns 5 while it prints 0 as length in console log
  //return arr.splice(0, arr.length);

  // this works
  // while(arr.length){
  //   arr.pop();
  // }
  // return arr;
}

// DO NOT CHANGE THIS (except the skips)
it.skip("Should return empty array.", function () {
  const arr = [1, 2, 3, 4, 5];
  const result = emptyArray(arr);
  expect(result.length).toBe(0);
});
