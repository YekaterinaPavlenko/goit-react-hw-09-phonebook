import React from 'react';
import { NavLink } from 'react-router-dom';
import hs from '../Header.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authSelectors from '../../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => {
  // console.log(this.props);
  return (
    <div className={hs.navItem}>
      <NavLink
        exact
        to={`/`}
        className={hs.navLink}
        activeClassName={hs.navLink_active}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact
          to={`/contacts`}
          className={hs.navLink}
          activeClassName={hs.navLink_active}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};
Navigation.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
const mapStateToProps = store => ({
  isAuthenticated: authSelectors.getIsAuthenticated(store),
});
export default connect(mapStateToProps)(Navigation);
