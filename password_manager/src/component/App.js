import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import Mainmenu from './Mainmenu'
import AddPassword from './AddPassword'
import {Provider} from 'react-redux'
import store from '../stores'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/mainmenu" component={Mainmenu}></Route>
            <Route path="/addpassword" component={AddPassword}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
