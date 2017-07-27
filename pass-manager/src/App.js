import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import { postPasswordToApi } from './actions'
import logo from './logo.svg';
import store from './stores'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: {
        username: '',
        url: '',
        password: ''
      }
    }
  }

  getUsernameChange(event) {
    console.log(event.target.value);
    this.setState({username: event.target.value})
  }

  getPasswordChange(event) {
    console.log(event.target.value);
    this.setState({password: event.target.value})
  }

  getUrlChange(event) {
    console.log(event.target.value);
    this.setState({url: event.target.value})
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <div className="App columns">
            <div className="column is-4 is-offset-4">
              <div className="field">
                <label className="label">URL</label>
                <div className="control">
                  <input className="input" type="text" placeholder="URL" onChange={(ev) => this.getUrlChange(ev)}/>
                </div>
              </div>

              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input className="input is-success" type="text" placeholder="Your Username" onChange={(ev) => this.getUsernameChange(ev)}/>
                </div>
                <p className="help is-success">This username is available</p>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input is-success" type="password" placeholder="Password" onChange={(ev) => this.getPasswordChange(ev)}/>
                </div>
                <p className="help is-success">password is good</p>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={() => this.props.postingPass()}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.getPass.passManager);
  return {
    passes: state.getPass.passManager
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postingPass: (username, password, url) => dispatch(postPasswordToApi(username, password, url))
  }
}

export default App;

