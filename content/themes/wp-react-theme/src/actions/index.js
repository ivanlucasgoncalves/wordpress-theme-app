import axios from 'axios'

export const fetchPosts = currentPage => dispatch => {
	let postsData = {
		per_page: 2,
		page: currentPage
	}
	dispatch({
		type: 'FETCH_POSTS',
		payload: axios
			.get(WPSettings.URL.api + `/posts/?_embed`, {
				params: postsData
			})
			.then(res => {
				return {
					totalPages: parseInt(res.headers['x-wp-totalpages']),
					data: res.data
				}
			})
			.catch(error => console.log('An error occurred:', error.message))
	})
}

export const setMorePosts = currentPage => dispatch => {
	dispatch({
		type: 'SET_MORE_POSTS',
		currentPage
	})
}
