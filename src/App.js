import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Header from './components/Header/Header';
import routes from './routes';
import * as authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);
class App extends Component {
  componentDidMount() {
    this.props.myGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Header />
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#3f51b5"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PublicRoute
              exact
              path={routes.register}
              restricted
              component={RegisterPage}
            />
            <PublicRoute
              exact
              path={routes.login}
              restricted
              component={LoginPage}
            />
            <PrivateRoute
              exact
              path={routes.contacts}
              component={ContactsPage}
            />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapDispatchToProps = {
  myGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
