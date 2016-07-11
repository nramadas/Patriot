import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import NewMessage from 'app/components/NewMessage';

const T = React.PropTypes;

export function Conversation(props) {
  return (
    <div className='Conversation'>
      <div className='Conversation__newMessage'>
        <NewMessage/>
      </div>
    </div>
  );
}

Conversation.propTypes = {
  messages: T.array.isRequired,
};

const selector = createSelector(
  state => state.conversations[state.currentConversation] || [],
  messages => ({ messages })
);

export default connect(selector)(Conversation);
