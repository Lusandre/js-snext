const state = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Spiderman",
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

const index = 1;
const newName = "Green Lantern";

// const newState = state.map((hero, i) => {
//   if (i === index) {
//     hero.name = newName;
//   }
//   return {...hero};
// });

// const newState = structuredClone(state).with(index, {
//   id: 1000,
//   name: newName,
// });

const newState = state.with(index, {
  ...state.at(index),
  name: newName,
});

state[0].name = "Wonder Woman";

console.table(newState);
console.log("el último: ", state.at(-1));
