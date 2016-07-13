import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import cx from 'lib/cx';

const T = React.PropTypes;

export function SearchResult(props) {
  const {
    id,
    username,
    isOnline,
  } = props;

  return (
    <div className='SearchResult'>
      <div className='SearchResult__name'>{ username }</div>
      { isOnline
        ? <div className='SearchResult__icon fa fa-circle'/>
        : <div className='SearchResult__icon fa fa-circle-o'/> }
    </div>
  );
}

SearchResult.propTypes = {
  id: T.string.isRequired,
  username: T.string.isRequired,
  isOnline: T.bool,
};

SearchResult.defaultProps = {
  isOnline: false,
};

export default connect(null, null)(SearchResult);
