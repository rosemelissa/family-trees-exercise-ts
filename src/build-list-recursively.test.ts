import { buildListRecursively } from "./build-list-recursively";
import { createBritishSuccessionTree } from "./families/britain";

const outputNames = [
  "Queen Elizabeth II",
  "Anne",
  "Zara",
  "Lucas",
  "Lena",
  "Mia",
  "Peter",
  "Isla",
  "Savannah",
  "Edward",
  "Louise",
  "James",
  "Andrew",
  "Eugenie",
  "August",
  "Beatrice",
  "Charles",
  "Harry",
  "Archie",
  "William",
  "Louis",
  "Charlotte",
  "George",
];

test("Builds list", () => {
  expect(buildListRecursively(createBritishSuccessionTree())).toStrictEqual(
    outputNames,
  );
});
