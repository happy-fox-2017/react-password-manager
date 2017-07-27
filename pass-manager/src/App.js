import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      url: '',
      password: ''
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
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
