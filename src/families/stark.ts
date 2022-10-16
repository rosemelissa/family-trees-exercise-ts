import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const eddardChildren: Person[] = [
    { name: "Rickon", children: [] },
    { name: "Bran", children: [] },
    { name: "Arya", children: [] },
    { name: "Sansa", children: [] },
    { name: "Robb", children: [] },
    { name: "Jon", children: [] },
  ];

  const rickardChildren: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Eddard", children: eddardChildren },
    { name: "Brandon", children: [] },
  ];

  const topPerson: Person = { name: "Rickard", children: rickardChildren };

  return topPerson;
}
