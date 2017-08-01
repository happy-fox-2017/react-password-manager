import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import PasswordForm from './components/PasswordForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Route exact path="/passwords_add" component={PasswordForm} />
        </Home>
      </Router>
    );
  }
}

export default App;
