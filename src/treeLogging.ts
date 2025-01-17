import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  const peopleStack: Person[] = [];
  peopleStack.push(topPerson);
  while (peopleStack.length > 0) {
    const currentPerson: Person = peopleStack.pop()!;
    console.log(currentPerson.name);
    peopleStack.push(...currentPerson.children);
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  const peopleStack: Person[] = [];
  peopleStack.push(topPerson);
  while (peopleStack.length > 0) {
    const currentPerson: Person = peopleStack.shift()!;
    console.log(currentPerson.name);
    peopleStack.push(...currentPerson.children);
  }
}
