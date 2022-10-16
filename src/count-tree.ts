import { buildStackList } from "./build-list";
import { Person } from "./personTypes";

export function countTree(topPerson: Person) {
  return buildStackList(topPerson).length;
}
