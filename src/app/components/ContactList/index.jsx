import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Contact from 'app/components/Contact';
import SearchResult from 'app/components/SearchResult';
import escapeRegex from 'lib/escapeRegex';

const T = React.PropTypes;

export function ContactList(props) {
  const {
    contactIds,
    isFiltered,
    searchPending,
    searchResults,
  } = props;

  return (
    <div className='ContactList'>
      <div className='ContactList__contacts'>
        { !!contactIds.length
          ? contactIds.map(id => <Contact key={ id } id={ id }/>)
          : !searchResults.length
            ? renderNoContacts(isFiltered)
            : null }
      </div>
      { isFiltered
        ? renderSearch(searchPending, searchResults)
        : null }
    </div>
  );
}

ContactList.propTypes = {
  contactIds: T.array.isRequired,
  isFiltered: T.bool,
  searchPending: T.bool,
  searchResults: T.arrayOf(T.object),
};

ContactList.defaultProps = {
  isFiltered: false,
  searchPending: false,
  searchResults: [],
};

const renderNoContacts = isFiltered => (
  <div className='ContactList__noContacts'>
    { isFiltered
      ? 'No users match your search'
      : 'You have no contacts' }
  </div>
);

const renderSearch = (isPending, results) => (
  <div className='ContactList__search'>
    { isPending
      ? renderPendingResults()
      : results.length
        ? renderSearchResults(results)
        : null }
  </div>
);

const renderPendingResults = () => (
  <div className='ContactList__pendingSearchResults'>
    <i className='fa fa-spinner fa-pulse fa-3x fa-fw'/>
  </div>
);

const renderSearchResults = results => (
  <div className='ContactList__results'>
    <div className='ContactList__resultsTitle'>Add contact</div>
    { results.map(props => <SearchResult key={ props.id } { ...props }/>) }
  </div>
);

const selector = createSelector(
  state => state.contacts.names,
  state => state.search.query,
  state => state.search.results.pending,
  state => state.search.results.results,
  (contacts, query, searchPending, searchResults) => ({
    searchPending,
    searchResults: searchResults
      .filter(({ id }) => !contacts[id])
      .sort((a, b) => {
        const _a = a.username;
        const _b = b.username;
        return _a.toLowerCase().localeCompare(_b.toLowerCase());
      }),
    contactIds: Object
      .keys(contacts)
      .filter(id => {
        const regex = new RegExp(escapeRegex(query), 'gi');
        return regex.test(contacts[id]);
      })
      .sort((a, b) => {
        const _a = contacts[a];
        const _b = contacts[b];
        return _a.toLowerCase().localeCompare(_b.toLowerCase());
      }),
    isFiltered: !!query,
  }),
);

export default connect(selector)(ContactList);
