import * as sidebarActions from 'app/actions/sidebar';

const DEFAULT = {
  isOpen: false,
};

export default function sidebar(state=DEFAULT, action={}) {
  switch(action.type) {
    case sidebarActions.TOGGLE: return { ...state, isOpen: !state.isOpen };
    default: return state;
  }
}
