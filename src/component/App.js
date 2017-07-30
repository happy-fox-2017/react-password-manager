import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NoMatch } from './404'
import { ContainerForm  as Home } from './ContainerForm'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         Hello World
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
