import React, { Component } from 'react';
import cfs from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/allContacts/allContactsOperations';
import { getContacts } from '../../redux/allContacts/contactsSelectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const allContacts = this.props.allContacts;
    // console.log(allContacts);
    const newContact = { ...this.state };

    this.formSubmitHandler(allContacts, newContact);

    this.reset();
  };
  formSubmitHandler = (allContacts, newContact) => {
    // console.log(allContacts);
    // console.log(newContact);
    let existName = allContacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );
    let existNumber = allContacts.find(
      contact =>
        contact.number.toLowerCase() === newContact.number.toLowerCase(),
    );
    let existContact = (existName && 'name') || (existNumber && 'number');
    return existName || existNumber
      ? alert(`The ${existContact} is already in contacts.`)
      : this.props.onSubmit(newContact);
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={cfs.form}>
        <label className={cfs.label}>
          Name
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter name"
            name="name"
            onChange={this.handleChange}
            value={name}
          ></input>
        </label>
        <label className={cfs.label}>
          Number
          <input
            type="tel"
            className={cfs.input}
            pattern="^[\+?\0-9\-_]+$"
            required
            placeholder="Enter phone number"
            name="number"
            onChange={this.handleChange}
            value={number}
          ></input>
        </label>
        <button type="submit" className={cfs.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = { onSubmit: PropTypes.func };
const mapStateToProps = store => {
  return { allContacts: getContacts(store) };
};
const mapDispatchToProps = {
  onSubmit: addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
