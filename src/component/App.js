import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Link } from 'react-router-dom'

import { NoMatch } from './404'
import ContainerList from './ContainerList'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContainerList} />
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
