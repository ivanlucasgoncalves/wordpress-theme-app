import { combineReducers } from 'redux'

import posts from './postsReducer'

// Combining all Reducers
const reducer = combineReducers({
	posts
})

export default reducer
