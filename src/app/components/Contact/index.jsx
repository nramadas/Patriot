import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as contactActions from 'app/actions/contact';
import cx from 'lib/cx';

const T = React.PropTypes;

export function Contact(props) {
  const {
    name,
    hasNewMessage,
    isOnline,
    isTyping,
    isSelected,
    onSelectContact,
  } = props;

  return (
    <div
      className={ cx('Contact', {
        'm-isOnline': !hasNewMessage && isOnline,
        'm-hasNewMessage': hasNewMessage,
        'm-isSelected': isSelected,
      }) }
      onClick={ onSelectContact }
    >
      <div className='Contact__name'>{ name }</div>
      { isOnline
        ? <div className='Contact__icon fa fa-circle'/>
        : <div className='Contact__icon fa fa-circle-o'/> }
    </div>
  );
}

Contact.propTypes = {
  name: T.string.isRequired,
  hasNewMessage: T.bool,
  isOnline: T.bool,
  isTyping: T.bool,
  isSelected: T.bool,
  onSelectContact: T.func,
};

Contact.defaultProps = {
  hasNewMessage: false,
  isOnline: false,
  isTyping: false,
  isSelected: false,
  onSelectContact: () => {},
};

const selector = createSelector(
  (state, ownProps) => state.contacts.names[ownProps.id],
  (state, ownProps) => state.contacts.onlineStatus[ownProps.id],
  (state, ownProps) => state.contacts.isTyping[ownProps.id],
  (state, ownProps) => state.contacts.hasNewMessage[ownProps.id],
  (state, ownProps) => state.currentConversation === ownProps.id,
  (name, isOnline, isTyping, hasNewMessage, isSelected) => ({
    name,
    isOnline,
    isTyping,
    isSelected,
    hasNewMessage,
  })
);

const dispatcher = (dispatch, ownProps) => ({
  onSelectContact: () => dispatch(contactActions.selectContact(ownProps.id)),
});

export default connect(selector, dispatcher)(Contact);
