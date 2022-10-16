import { Person } from "./personTypes";
import { buildStackList } from "./build-list";

export function logIfInTree(targetName: string, topOfTree: Person): boolean {
  return buildStackList(topOfTree).includes(targetName);
}
