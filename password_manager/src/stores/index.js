import { createStore } from "redux"
import rootReducer from '../reducers/index.js'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger)
let store = createStore(rootReducer, middleware)

export default store;