import React from 'react';
// import { withRouter } from 'react-router-dom';
import hs from './Header.module.css';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';

const Header = ({ isAuthenticated }) => {
  return (
    <header className={hs.header}>
      <div className={hs.container}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
};
// Header.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };
const mapStateToProps = store => ({
  isAuthenticated: authSelectors.getIsAuthenticated(store),
});

export default connect(mapStateToProps)(Header);
