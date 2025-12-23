import { twoSum } from "../utils/twoSum";

test("returns correct indices for positive numbers", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("returns correct indices for negative numbers", () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});

test("returns empty array if no solution exists", () => {
  expect(twoSum([1, 2, 3], 7)).toEqual([]);
});
