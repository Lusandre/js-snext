const heroes = ["Batman", "Spiderman", "Aquaman", "Flash"];

const deletedHero = heroes.toSpliced(0, 2, "Superman");
const sortedHeroes = heroes.toSorted();
heroes.sort();
const reverseHeroes = heroes.toReversed();

console.table(heroes);
console.table(sortedHeroes);
console.table(reverseHeroes);
console.table(deletedHero);
