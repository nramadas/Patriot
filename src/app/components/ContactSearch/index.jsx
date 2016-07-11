import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as searchActions from 'app/actions/search';

const T = React.PropTypes;

export function ContactSearch(props) {
  return (
    <input
      className='ContactSearch'
      placeholder='Search'
      onChange={ e => props.onSearch(e.target.value) }
    />
  );
}

const dispatcher = dispatch => ({
  onSearch: val => dispatch(searchActions.searchContacts(val)),
});

export default connect(null, dispatcher)(ContactSearch);