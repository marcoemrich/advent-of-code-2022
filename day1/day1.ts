import * as R from "ramda";

type Calories = Readonly<number>;
export type Elf = Readonly<Calories[]>;
type caloriesForElfT = (elf: Elf) => Calories;
type weightOfHeaviestElfT = (elves: Elf[]) => Calories;
type parseCaloriesListForElfT = (caloriesList: string) => Elf;
type parseCaloriesListT = (list: string) => Elf[];
type elfCarryingMostCaloriesForInputT = (list: string) => number;
type splitCaloriesListToElfCaloriesListT = (caloriesList: string) => string[];

export const caloriesForElf: caloriesForElfT = (elf) => R.sum(elf);

const max = R.reduce(Math.max, 0);

export const weightOfHeaviestElf: weightOfHeaviestElfT = R.pipe(
  R.map(caloriesForElf),
  max
);

export const parseCaloriesListForElf: parseCaloriesListForElfT = R.pipe(
  R.split("\n"),
  R.map(Number)
);

const splitCaloriesListToElfCaloriesList: splitCaloriesListToElfCaloriesListT =
  R.split("\n\n");

export const parseCaloriesList: parseCaloriesListT = R.pipe(
  splitCaloriesListToElfCaloriesList,
  R.map(parseCaloriesListForElf)
);

export const elfCarryingMostCaloriesForInput: elfCarryingMostCaloriesForInputT =
  R.pipe(parseCaloriesList, weightOfHeaviestElf);
