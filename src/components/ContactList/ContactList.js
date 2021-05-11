import React, { Component } from 'react';
import { connect } from 'react-redux';
import ls from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { getAllContacts } from '../../redux/allContacts/allContactsOperations';
import { filteredData } from '../../redux/filter/filterSelector';
import * as authSelectors from '../../redux/auth/auth-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.myGetAllContacts();
  }

  render() {
    // console.log(this.props);
    const { contacts, isAuthorised } = this.props;
    // console.log(contacts);
    return (
      <>
        {isAuthorised ? (
          <ul className={ls.list}>
            {contacts.length > 0 ? (
              <ContactItem contacts={contacts} />
            ) : (
              <p>You have no contacts</p>
            )}
          </ul>
        ) : (
          <p className={ls.list}>You are not authorizated! Login, please!</p>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

const mapStateToProps = store => {
  return {
    contacts: filteredData(store),
    isAuthorised: authSelectors.getIsAuthenticated(store),
  };
};
const mapDispatchToProps = {
  myGetAllContacts: getAllContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
