import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import PasswordManager from './components/PasswordManager'
import newPassword from './components/newPassword'
import editPassword from './components/editPassword'

class App extends Component {
  render() {

    let styleDiv = {
      padding: "20px"
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="App-header field">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="title is-2">Welcome to Password Manager</h2>
            </div>
            <p className="App-intro field" style={{marginBottom: "30px"}}>
              To get started, input your password by clicking New Password.
            </p>
            <div className="columns" style={{margin: "20px"}}>
              <div className="column box" style={styleDiv}>
                <Route exact path="/" component={PasswordManager}/>
                <Route exact path="/password-manager" component={PasswordManager}/>
                <Route path="/new-password" component={newPassword}/>
                <Route path="/password-manager/:id" component={editPassword}/>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
