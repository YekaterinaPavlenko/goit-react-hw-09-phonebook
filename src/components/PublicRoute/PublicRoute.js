import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = store => ({
  isAuthenticated: authSelectors.getIsAuthenticated(store),
});
export default connect(mapStateToProps)(PublicRoute);
