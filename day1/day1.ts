import * as R from "remeda";

type Calories = Readonly<number>;
export type Elf = Readonly<Calories[]>;
type caloriesForElfT = (elf: Elf) => Calories;
type weightOfHeaviestElfT = (elves: Elf[]) => Calories;
type parseCaloriesListForElfT = (caloriesList: string) => Elf;
type parseCaloriesListT = (list: string) => Elf[];
type elfCarryingMostCaloriesForInputT = (list: string) => number;

const add = (a: number, b: number): number => a + b;

export const caloriesForElf: caloriesForElfT = (elf) => R.reduce(elf, add, 0);

export const weightOfHeaviestElf: weightOfHeaviestElfT = (elves) =>
  Math.max(...R.map(elves, caloriesForElf));

export const parseCaloriesListForElf: parseCaloriesListForElfT = (
  caloriesList
) => R.map(caloriesList.split("\n"), Number);

const splitCaloriesListToElfCaloriesList: (caloriesList: string) => string[] = (
  caloriesList
) => caloriesList.split("\n\n");

export const parseCaloriesList: parseCaloriesListT = (caloriesList) => {
  return R.map(
    splitCaloriesListToElfCaloriesList(caloriesList),
    parseCaloriesListForElf
  );
};

export const elfCarryingMostCaloriesForInput: elfCarryingMostCaloriesForInputT =
  (list) => weightOfHeaviestElf(parseCaloriesList(list));
