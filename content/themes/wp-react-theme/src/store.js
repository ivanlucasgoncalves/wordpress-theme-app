import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// Importing from reducers
import rootReducer from './reducers'

export const history = createBrowserHistory()

const middleware = [promise(), thunk, routerMiddleware(history)]

const store = createStore(
	rootReducer(history),
	/* preloadedState, */
	composeWithDevTools(applyMiddleware(...middleware, logger))
)

export default store
