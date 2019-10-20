import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import './App.css';

import Dashboard from './containers/Dashboard/Dashboard';
import Auth from './containers/Auth/Auth';

class App extends Component {  
  componentDidMount() {
    this.props.onTryAuthSignup();
  }

  
  render() {

    let routesAre = (
      <div className="App">
        <Auth />
      </div>
    );

    if(this.props.isAuth) {
      routesAre = (
        <div className="App">
          <Dashboard />
        </div>
      );
    }

    return (
      <BrowserRouter basename="/">
          {routesAre}
      </BrowserRouter>
    );
  }

}

const mapStateToProps = state => {
  return {
    isAuth: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
