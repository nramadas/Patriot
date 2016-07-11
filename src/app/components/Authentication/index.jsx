import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const T = React.PropTypes;

export class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: true };
  }

  render() {
    return (
      <div className='Authentication'>
        <div className='Authentication__forms'>
        </div>
        <div className='Authentication__explanation'>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Authentication);
