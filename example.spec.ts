import * as R from "remeda";

const turnAround = <T>(arr: Array<T>): Array<T> => {
  // return arr.reduce((acc: T[], c) => [c, ...acc] /*?*/, []);
  return R.reduce(arr, (acc: T[], c) => [c, ...acc] /*?*/, []);
};

describe("turnAround", () => {
  it("should turn it around", () => {
    expect(turnAround([0, 1, 2])).toEqual([2, 1, 0]);
  });
});
