import React from 'react';
import lis from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as allContactsAction from '../../../redux/allContacts/allContactsAction';
import * as contactsOperations from '../../../redux/allContacts/allContactsOperations';

const ContactItem = ({ contacts, deleteContact }) => {
  // console.log(contacts);
  return contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <li key={id} className={lis.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          type="button"
          className={lis.btn_delete}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteContact: contactsOperations.deleteContact,
};
export default connect(null, mapDispatchToProps)(ContactItem);
