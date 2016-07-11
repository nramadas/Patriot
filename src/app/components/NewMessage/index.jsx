import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import clamp from 'lib/clamp';

const T = React.PropTypes;

const MIN_HEIGHT = 50;
const MAX_HEIGHT = 200;

export function NewMessage(props) {
  const { recipient } = props;

  return (
    <div className='NewMessage'>
      <div className='NewMessage__icon'>{ '>' }</div>
      <textarea
        className='NewMessage__input'
        placeholder={ `Send a message to ${recipient}...` }
        onChange={ e => {
          const { currentTarget } = e;
          // set the content to something really small so that we can get
          // an accurate measurement of the scroll height
          currentTarget.style.height = 1;
          const { scrollHeight } = currentTarget;
          const contentHeight = clamp(scrollHeight, MIN_HEIGHT, MAX_HEIGHT);
          currentTarget.style.height = contentHeight;
        } }
      />
    </div>
  );
}

NewMessage.propTypes = {
  recipient: T.string.isRequired,
};

const selector = createSelector(
  state => state.contacts.names[state.currentConversation],
  recipient => ({ recipient })
);

const dispatcher = dispatch => ({

});

export default connect(selector, dispatcher)(NewMessage);
