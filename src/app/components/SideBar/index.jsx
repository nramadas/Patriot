import './index.less';
import React from 'react';

import Account from 'app/components/Account';
import ContactList from 'app/components/ContactList';
import ContactSearch from 'app/components/ContactSearch';

const T = React.PropTypes;

export default function SideBar(props) {
  return (
    <div className='SideBar'>
      <div className='Sidebar__menuTab fa fa-navicon' onClick={ props.onToggleSidebar }/>
      <div className='SideBar__account'><Account/></div>
      <div className='SideBar__contacts'><ContactList/></div>
      <div className='SideBar__search'><ContactSearch/></div>
    </div>
  );
}

SideBar.propTypes = {
  onToggleSidebar: T.func,
};

SideBar.defaultProps = {
  onToggleSidebar: () => {},
};
