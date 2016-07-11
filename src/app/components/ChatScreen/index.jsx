import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import cx from 'lib/cx';
import SideBar from 'app/components/SideBar';
import Conversation from 'app/components/Conversation';
import * as sidebarActions from 'app/actions/sidebar';

const T = React.PropTypes;

export function ChatScreen(props) {
  return (
    <div className='ChatScreen'>
      <div className={ cx('ChatScreen__sideBar', {
        'm-isOpen': props.sidebarIsOpen,
      }) }>
        <SideBar onToggleSidebar={ props.onToggleSidebar }/>
      </div>
      <div className='ChatScreen__conversation'>
        { props.conversationOpen
          ? <Conversation/>
          : renderNoConversation() }
      </div>
    </div>
  );
}

ChatScreen.propTypes = {
  conversationOpen: T.bool,
  sidebarIsOpen: T.bool,
  onToggleSidebar: T.func,
};

ChatScreen.defaultProps = {
  conversationOpen: false,
  sidebarIsOpen: false,
  onToggleSidebar: () => {},
};

const renderNoConversation = () => (
  <div className='ChatScreen__noConversation'>
    No active conversation
  </div>
);

const selector = createSelector(
  state => state.currentConversation,
  state => state.sidebar.isOpen,
  (conversationId, sidebarIsOpen) => ({
    sidebarIsOpen,
    conversationOpen: !!conversationId,
  }),
);

const dispatcher = dispatch => ({
  onToggleSidebar: () => dispatch(sidebarActions.toggleSidebar()),
});

export default connect(selector, dispatcher)(ChatScreen);
