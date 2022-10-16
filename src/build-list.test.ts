import { buildStackList } from "./build-list";
import { buildQueueList } from "./build-list";
import { createBritishSuccessionTree } from "./families/britain";

test("Stack list is as expected", () => {
  expect(buildStackList(createBritishSuccessionTree())).toStrictEqual([
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
  ]);
});

test("Queue list as expected", () => {
  expect(buildQueueList(createBritishSuccessionTree())).toStrictEqual([
    "Queen Elizabeth II",
    "Charles",
    "Andrew",
    "Edward",
    "Anne",
    "William",
    "Harry",
    "Beatrice",
    "Eugenie",
    "James",
    "Louise",
    "Peter",
    "Zara",
    "George",
    "Charlotte",
    "Louis",
    "Archie",
    "August",
    "Savannah",
    "Isla",
    "Mia",
    "Lena",
    "Lucas",
  ]);
});
