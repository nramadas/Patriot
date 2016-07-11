const DEFAULT = {
  username: '',
  id: '',
  loggedIn: false,
};

export default function authentication(state=DEFAULT, action={}) {
  switch(action.type) {
    default: return state;
  }
}
