import './normalize.css';
import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Authentication from 'app/components/Authentication';
import ChatScreen from 'app/components/ChatScreen';

const T = React.PropTypes;

export function App(props) {
  const { userIsAuthenticated } = props;

  return (
    <div>
      { userIsAuthenticated ? <ChatScreen/> : <Authentication/> }
    </div>
  );
};

App.propTypes = {
  userIsAuthenticated: T.bool,
};

App.defaultProps = {
  userIsAuthenticated: false,
};

const selector = createSelector(
  state => state.user.loggedIn,
  userIsAuthenticated => ({ userIsAuthenticated })
);

export default connect(selector)(App);
