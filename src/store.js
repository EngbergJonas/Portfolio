import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import themeReducer from './reducers/themeReducer'
import anotherReducer from './reducers/anotherReducer'

const reducer = combineReducers({ theme: themeReducer, another: anotherReducer })
//const reducer = { theme: themeReducer }

const store = createStore(reducer, applyMiddleware(thunk))

export default store
