const DEFAULT = {
  0: "Alice",
  1: "Bob",
  2: "Carrie",
  3: "Dave",
  4: "Eric",
  5: "Francine",
};

export default function names(state=DEFAULT, action={}) {
  switch(action.type) {
    default: return state;
  }
}
