import React, { Component } from 'react';
import cfs from '../../components/ContactsForm/ContactForm.module.css';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
class LoginPage extends Component {
  state = {
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
    this.props.onLogin(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={cfs.form}>
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
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};
export default connect(null, mapDispatchToProps)(LoginPage);
