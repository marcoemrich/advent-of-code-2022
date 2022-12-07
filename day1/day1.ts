import * as R from "remeda";

type Calories = Readonly<number>;
export type Elf = Readonly<Calories[]>;
const add = (a: number, b: number): number => a + b;
type caloriesForElfT = (elf: Elf) => Calories;
export const caloriesForElf: caloriesForElfT = (elf) => R.reduce(elf, add, 0);
type weightOfHeaviestElfT = (elves: Elf[]) => Calories;
export const weightOfHeaviestElf: weightOfHeaviestElfT = (elves) =>
  Math.max(...R.map(elves, caloriesForElf));
type parseCaloriesListForElfT = (caloriesList: string) => Elf;
export const parseCaloriesListForElf: parseCaloriesListForElfT = (
  caloriesList
) => R.map(caloriesList.split("\n"), Number);
const splitCaloriesListToElfCaloriesList: (caloriesList: string) => string[] = (
  caloriesList
) => caloriesList.split("\n\n");
type parseCaloriesListT = (list: string) => Elf[];
export const parseCaloriesList: parseCaloriesListT = (caloriesList) => {
  const elves = caloriesList.split("\n\n"); /* ? */

  return R.map(elves, parseCaloriesListForElf);
};
type elfCarryingMostCaloriesForInputT = (list: string) => number;
export const elfCarryingMostCaloriesForInput: elfCarryingMostCaloriesForInputT =
  (list) => weightOfHeaviestElf(parseCaloriesList(list));
