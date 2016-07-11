import { combineReducers } from 'redux';

import hasNewMessage from './hasNewMessage';
import isTyping from './isTyping';
import names from './names';
import onlineStatus from './onlineStatus';

export default combineReducers({
  hasNewMessage,
  isTyping,
  names,
  onlineStatus,
});
