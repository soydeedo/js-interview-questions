/*
There are 10 doors in a row that are all initially closed. You make N passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc. until you reach pass N.

Implement a function to return an array that only includes the door numbers of the open doors, when provided the number of doors and the number of passes.
*/

function getOpenDoors() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
describe("getOpenDoors", function() {
  it.skip("should yield the correct doors with 10 doors and 1 pass", function() {
    const result = getOpenDoors({
      numDoors: 10,
      numPasses: 0
    });

    expect(result).toEqual([]);
  });

  it.skip("should yield the correct doors with 10 doors and 1 pass", function() {
    const result = getOpenDoors({
      numDoors: 10,
      numPasses: 1
    });

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it.skip("should yield the correct doors with 10 doors and 5 passes", function() {
    const result = getOpenDoors({
      numDoors: 10,
      numPasses: 5
    });

    expect(result).toEqual([1, 4, 6, 7, 8, 10]);
  });
});
