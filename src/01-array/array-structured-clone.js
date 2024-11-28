const superHeroes = [
  {
    id: 1,
    name: "batman",
  },
  {
    id: 2,
    name: "spiderman",
  },
  {
    id: 3,
    name: "Aquaman",
  },
  {
    id: 4,
    name: "Flash",
  },
];

const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = "Green Lantern";

console.table(superHeroes);
console.table(superHeroesCopy);
