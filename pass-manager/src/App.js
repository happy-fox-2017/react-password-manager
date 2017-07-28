import React, {Component} from 'react';
import {
  BrowserRouter as Router
  // Route,
  // Link
} from 'react-router-dom'
import { Provider} from 'react-redux'

import AllPasses from './components/AllPasses'
import Form from './components/Form'
import { getPasswordFromApi } from './actions'
import store from './stores'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  componentDidMount() {
    store.dispatch(getPasswordFromApi())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Form ></Form>
            <AllPasses></AllPasses>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;

