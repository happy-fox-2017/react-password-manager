import React, { Component } from 'react'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MainComponent from './component'
import store from './store'

injectTapEventPlugin()

class App=(props)=>{
    return (
         <Provider store={ store }>
               <MainComponent>
         </Provider>
    )
}

export default App
