import { countTree } from "./count-tree";
import { createBritishSuccessionTree } from "../src/families/britain";

test("Counts number of people in tree", () => {
  expect(countTree(createBritishSuccessionTree())).toStrictEqual(23);
});
