const initialState = {
	fetching: false,
	posts: [],
	page: 1,
	total: 0
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS_PENDING':
			return {
				...state,
				fetching: true
			}
			break
		case 'FETCH_POSTS_REJECTED':
			return {
				...state,
				fetching: false
			}
			break
		case 'FETCH_POSTS_FULFILLED':
			return {
				...state,
				fetching: false,
				page: state.page + 1,
				posts: [...state.posts, ...action.payload]
			}
			break
		default:
			return state
			break
	}
}

export default postsReducer
