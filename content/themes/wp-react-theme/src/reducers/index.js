import { combineReducers } from 'redux'

import posts from './postsReducer'

const reducer = combineReducers({
	posts
})

export default reducer
