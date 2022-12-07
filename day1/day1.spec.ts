// using remeda and functional calisthenics (partly)
import {
  Elf,
  caloriesForElf,
  weightOfHeaviestElf,
  parseCaloriesListForElf,
  parseCaloriesList,
  elfCarryingMostCaloriesForInput,
} from "./day1";

describe("caloriesForElf", () => {
  it("should return the added number of calories from the list", () => {
    const elf1: Elf = [1, 2, 3];
    expect(caloriesForElf(elf1)).toEqual(6);
  });
});

describe("weightOfHeaviestElf", () => {
  it("should return the largest weight from several elves", () => {
    const elf1: Elf = [5];
    const elf2: Elf = [6];
    expect(weightOfHeaviestElf([elf1, elf2])).toEqual(6);
  });
});

describe("parseCaloriesListForElf", () => {
  it("should convert a string to an elf", () => {
    const list = "1000\n2000\n3000";
    expect(parseCaloriesListForElf(list)).toEqual([1000, 2000, 3000]);
  });
});

describe("parseCaloriesList", () => {
  it("should convert a string to an elf", () => {
    const list = "1000\n2000\n\n3000";
    expect(parseCaloriesList(list)).toEqual([[1000, 2000], [3000]]);
  });
});

describe("elfCarryingMostCaloriesForInput", () => {
  it("should return the result", () => {
    const list = "1000\n4000\n\n3000";
    expect(elfCarryingMostCaloriesForInput(list)).toEqual(5000);
  });
});
