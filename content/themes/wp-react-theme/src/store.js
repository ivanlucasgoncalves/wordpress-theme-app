import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// Importing from reducers
import reducer from './reducers'

const middleware = [promise(), thunk]

export default createStore(
	reducer,
	/* preloadedState, */
	composeWithDevTools(applyMiddleware(...middleware, logger))
)
