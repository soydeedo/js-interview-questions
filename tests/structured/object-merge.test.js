function merge() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
describe("merging objects", () => {
  const o1 = { a: 5, b: "hi" };
  const o2 = { c: 10, d: 20, e: true };
  const o3 = { c: 20, d: 30, f: "yes" };

  it.skip("should include all new properties", () => {
    const expected = { a: 5, b: "hi", c: 10, d: 20, e: true };
    expect(merge(o1, o2)).toEqual(expected);
    expect(merge(o2, o1)).toEqual(expected);
  });

  it.skip("should merge objects based on the order passed", () => {
    const c20 = { c: 20, d: 30, e: true, f: "yes" };
    expect(merge(o2, o3)).toEqual(c20);

    const c10 = { c: 10, d: 20, e: true, f: "yes" };
    expect(merge(o3, o2)).toEqual(c10);
  });

  it.skip("should merge 3 objects", () => {
    const expected = { a: 5, b: "hi", c: 20, d: 30, e: true, f: "yes" };
    expect(merge(o1, o2, o3)).toEqual(expected);
  });

  it.skip("should not affect passed objects", () => {
    expect(o1).toEqual({ a: 5, b: "hi" });
    expect(o2).toEqual({ c: 20, b: "yes" });
    expect(o3).toEqual({ d: 20, e: true });
  });
});
