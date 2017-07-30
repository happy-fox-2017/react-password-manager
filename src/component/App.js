import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { NoMatch } from './404'
import ContainerList from './ContainerList'
import Store from '../stores/index'

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContainerList} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
