import * as R from "ramda";
import * as RE from "remeda";

type Calories = Readonly<number>;
export type Elf = Readonly<Calories[]>;
type caloriesForElfT = (elf: Elf) => Calories;
type weightOfHeaviestElvesT = (elves: Elf[]) => Calories;
type parseCaloriesListForElfT = (caloriesList: string) => Elf;
type parseCaloriesListT = (list: string) => Elf[];
type elfCarryingMostCaloriesForInputT = (list: string) => number;
type splitCaloriesListToElfCaloriesListT = (caloriesList: string) => string[];

export const caloriesForElf: caloriesForElfT = (elf) => R.sum(elf);

export const weightOfHeaviestElves: weightOfHeaviestElvesT = (elves) => {
  return R.pipe(
    R.map(caloriesForElf),
    R.sort(R.subtract),
    RE.reverse, //Ramda: RE.reverse as (a: number[]) => number[]
    R.take(3),
    R.sum
  )(elves);
};

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
  R.pipe(parseCaloriesList, weightOfHeaviestElves);
