const DEFAULT = {
  0: true,
  1: false,
  2: false,
  3: true,
  4: true,
  5: false,
};

export default function(state=DEFAULT, action={}) {
  switch(action.type) {
    default: return state;
  }
}
