import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Contact from 'app/components/Contact';
import escapeRegex from 'lib/escapeRegex';

const T = React.PropTypes;

export function ContactList(props) {
  const {
    contactIds,
    isFiltered,
  } = props;

  return (
    <div className='ContactList'>
      { !!contactIds.length
        ? contactIds.map(id => <Contact key={ id } id={ id }/>)
        : renderNoContacts(isFiltered) }
    </div>
  );
}

ContactList.propTypes = {
  contactIds: T.array.isRequired,
  isFiltered: T.bool,
};

ContactList.defaultProps = {
  isFiltered: false,
};

const renderNoContacts = isFiltered => (
  <div className='ContactList__noContacts'>
    { isFiltered
      ? 'No users match your search'
      : 'You have no contacts' }
  </div>
);

const selector = createSelector(
  state => state.contacts.names,
  state => state.search.query,
  (contacts, query) => ({
    contactIds: Object
      .keys(contacts)
      .filter(id => {
        const regex = new RegExp(escapeRegex(query), 'gi');
        return regex.test(contacts[id]);
      }),
    isFiltered: !!query,
  }),
);

export default connect(selector)(ContactList);
