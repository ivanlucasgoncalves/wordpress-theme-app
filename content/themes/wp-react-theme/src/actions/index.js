// Constants
export const FETCH_POSTS = 'FETCH_POSTS'

// Action Creators
export const fetchPosts = () => dispatch => {
	dispatch({
		type: FETCH_POSTS,
		payload: fetch('http://wp-app.local/wp-json/wp/v2/posts')
			.then(res => res.json())
			.then(post => post)
			.catch(error =>
				console.log(
					'There has been a problem with your fetch operation:',
					error.message
				)
			)
	})
}
