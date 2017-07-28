import { createStore, applyMiddleware } from "redux"
import rootReducer from '../reducers/index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger)
let store = createStore(rootReducer, middleware)

export default store;