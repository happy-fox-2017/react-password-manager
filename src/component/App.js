import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { NoMatch } from './404'
import ContainerList from './ContainerList'
import ContainerAdd from './ContainerAdd'
import ContainerUpdate from './ContainerUpdate'
import Store from '../stores/index'

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContainerList} />
          <Route path="/form" component={ContainerAdd} />
          <Route path="/update/:id" component={ContainerUpdate} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
