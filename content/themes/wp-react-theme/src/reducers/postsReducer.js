const initialState = {
	fetching: false,
	posts: [],
	newPosts: [
		{
			title: {
				rendered: 'New Awesome WordPress Posts'
			},
			excerpt: {
				rendered: 'hahahaha....good!!!'
			}
		}
	],
	currentPage: 1,
	totalPages: 0
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS_PENDING':
			return {
				...state,
				fetching: true
			}
		case 'FETCH_POSTS_REJECTED':
			return {
				...state,
				fetching: false
			}
		case 'FETCH_POSTS_FULFILLED':
			return {
				...state,
				fetching: false,
				posts: action.payload.data,
				totalPages: action.payload.totalPages
			}
		case 'SET_MORE_POSTS':
			return {
				...state,
				currentPage: state.currentPage + 1
			}
		default:
			return state
	}
}

export default postsReducer
