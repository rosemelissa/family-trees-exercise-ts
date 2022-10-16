import { createBritishSuccessionTree } from "./families/britain";
import { isDescendant } from "./is-descendant";

test("Checks for descendant", () => {
  expect(
    isDescendant("William", "Charles", createBritishSuccessionTree()),
  ).toStrictEqual(true);
  expect(
    isDescendant("Charles", "William", createBritishSuccessionTree()),
  ).toStrictEqual(false);
});
