import axios from 'axios'

// Action Creators
export const fetchPosts = page => dispatch => {
	const postsData = {
		per_page: 2,
		page: page
	}
	console.log('Number of page: ' + postsData.page)
	dispatch({
		type: 'FETCH_POSTS',
		payload: axios
			.get(WPSettings.URL.api + `/posts/?_embed`, {
				params: postsData
			})
			.then(res => {
				const totalPages = res.headers['x-wp-totalpages']
				console.log('Total of pages: ' + totalPages)

				return res.data
			})
			.catch(error => console.log('An error occurred:', error.message))
	})
}
