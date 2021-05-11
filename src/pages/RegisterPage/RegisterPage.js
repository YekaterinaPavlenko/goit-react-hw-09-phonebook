import React, { Component } from 'react';
import cfs from '../../components/ContactsForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addContact } from '../../redux/allContacts/allContactsOperations';
// import { getContacts } from '../../redux/allContacts/contactsSelectors';
import * as authOperations from '../../redux/auth/auth-operations';
class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    // this.setState({ name: '', email: '', password: '' });
    // const allContacts = this.props.allContacts;
    // // console.log(allContacts);
    // const newContact = { ...this.state }; /// id: uuidv4(),
    // // console.log(contact);
    // this.formSubmitHandler(allContacts, newContact);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={cfs.form}
        autoComplete="off"
      >
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
          Email
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
            value={email}
          ></input>
        </label>
        <label className={cfs.label}>
          Password
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter password"
            name="password"
            onChange={this.handleChange}
            value={password}
          ></input>
        </label>
        <button type="submit" className={cfs.button}>
          Register
        </button>
      </form>
    );
  }
}
// const RegisterPage = () => {
//   return (
//     <>
//       <p>Это страничка register.</p>
//     </>
//   );
// };
RegisterPage.propTypes = { onSubmit: PropTypes.func };

const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterPage);

// import React, { Component } from 'react';
// import cfs from './ContactForm.module.css';
// import PropTypes from 'prop-types';
// // import { v4 as uuidv4 } from 'uuid';
// import { connect } from 'react-redux';
// import { addContact } from '../../redux/allContacts/allContactsOperations';
// import { getContacts } from '../../redux/allContacts/contactsSelectors';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     // console.log(e.currentTarget.value);
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const allContacts = this.props.allContacts;
//     // console.log(allContacts);
//     const newContact = { ...this.state }; /// id: uuidv4(),
//     // console.log(contact);
//     this.formSubmitHandler(allContacts, newContact);

//     this.reset();
//   };
//   formSubmitHandler = (allContacts, newContact) => {
//     // console.log(allContacts);
//     // console.log(newContact);
//     let existName = allContacts.find(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
//     );
//     let existNumber = allContacts.find(
//       contact =>
//         contact.number.toLowerCase() === newContact.number.toLowerCase(),
//     );
//     let existContact = (existName && 'name') || (existNumber && 'number');
//     return existName || existNumber
//       ? alert(`The ${existContact} is already in contacts.`)
//       : this.props.onSubmit(newContact);
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={cfs.form}>
//         <label className={cfs.label}>
//           Name
//           <input
//             type="text"
//             className={cfs.input}
//             pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
//             required
//             placeholder="Enter name"
//             name="name"
//             onChange={this.handleChange}
//             value={name}
//           ></input>
//         </label>
//         <label className={cfs.label}>
//           Number
//           <input
//             type="tel"
//             className={cfs.input}
//             pattern="^[\+?\0-9\-_]+$"
//             required
//             placeholder="Enter phone number"
//             name="number"
//             onChange={this.handleChange}
//             value={number}
//           ></input>
//         </label>
//         <button type="submit" className={cfs.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// ContactForm.propTypes = { onSubmit: PropTypes.func };
// const mapStateToProp = store => {
//   return { allContacts: getContacts(store) };
// };
// const mapDispatchToProps = {
//   onSubmit: addContact,
// };
// export default connect(mapStateToProp, mapDispatchToProps)(ContactForm);
