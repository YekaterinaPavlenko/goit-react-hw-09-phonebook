import React from 'react';
// import { withRouter } from 'react-router-dom';
import hs from '../Header.module.css';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authSelectors from '../../../redux/auth/auth-selectors';
import * as authOperations from '../../../redux/auth/auth-operations';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div className={hs.navList}>
      <p className={hs.navItem}>{email}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
// UserMenu.propTypes = {
//   match: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//   }),
// };
const mapStateToProps = store => ({
  email: authSelectors.getUserMail(store),
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
