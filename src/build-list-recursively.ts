import { createBritishSuccessionTree } from "./families/britain";
import { Person } from "./personTypes";

export function buildListRecursively(topPerson: Person): string[] {
  const currentPerson = topPerson;
  const nameList: string[] = [topPerson.name];
  for (let child of currentPerson.children) {
    nameList.push(...buildListRecursively(child));
  }
  return nameList;
}

console.log(buildListRecursively(createBritishSuccessionTree()));
