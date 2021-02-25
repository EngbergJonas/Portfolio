import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import themeReducer from './reducers/themeReducer'
import topicReducer from './reducers/topicReducer'
import activeButtonReducer from './reducers/activeButtonReducer'

const reducer = combineReducers({ theme: themeReducer, topic: topicReducer, activeButton: activeButtonReducer })
//const reducer = { theme: themeReducer }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
