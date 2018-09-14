import React, { Component } from 'react';
import logo from './logo.svg';
import {  Route, withRouter } from "react-router-dom";
import './App.css';

import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Jokes from './components/jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your future</h1>
        </header>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/users" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
