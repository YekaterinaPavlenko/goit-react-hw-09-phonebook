import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import hs from '../Header.module.css';
import PropTypes from 'prop-types';

const AuthMenu = ({ match }) => {
  return (
    <ul className={hs.navList}>
      <li className={hs.navItem}>
        <NavLink
          exact
          to={`${match.url}register`}
          className={hs.navLink}
          activeClassName={hs.navLink_active}
        >
          Register
        </NavLink>
      </li>
      <li className={hs.navItem}>
        <NavLink
          to={`${match.url}login`}
          className={hs.navLink}
          activeClassName={hs.navLink_active}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};
AuthMenu.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
export default withRouter(AuthMenu);
