import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions'
import Post from '../components/post'

class Blog extends React.Component {
	// state = {
	// 	fetching: false,
	// 	posts: [],
	// 	page: 1,
	// 	total: 0
	// }
	componentDidMount({ fetchPosts, page } = this.props) {
		//this.getMorePosts()
		fetchPosts(page)
	}
	handleClick = (e, { fetchPosts, page } = this.props) => {
		e.preventDefault()
		fetchPosts(page)
		//this.getMorePosts()
	}
	// getMorePosts = () => {
	// 	let postsData = {
	// 		per_page: 2,
	// 		page: this.state.page
	// 	}
	// 	this.setState({
	// 		fetching: true
	// 	})
	// 	axios
	// 		.get(WPSettings.URL.api + `/posts/?_embed`, { params: postsData })
	// 		.then(res => {
	// 			let totalPages = parseInt(res.headers['x-wp-totalpages'])
	// 			const posts = res.data
	// 			this.setState({
	// 				fetching: false,
	// 				posts: [...this.state.posts, ...posts],
	// 				page: this.state.page + 1,
	// 				total: totalPages
	// 			})
	// 		})
	// 		.catch(error => console.log('An error occurred:', error.message))
	// }
	render({ fetching, posts } = this.props) {
		return (
			<div className='page page-blog'>
				<header className='header'>
					<Link to='/'>Home</Link>
					<main>
						{posts.map(post => (
							<Post key={post.id} post={post} />
						))}
						{fetching ? 'Loading...' : ''}
					</main>
					{/* {this.state.page <= this.state.total ? (
						<button onClick={this.handleClick}>Load more posts...</button>
					) : (
						''
          )} */}
					<button onClick={this.handleClick}>Load more posts...</button>
				</header>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts.posts,
	page: state.posts.page,
	fetching: state.posts.fetching,
	total: state.posts.total
})

const mapDispatchToProps = {
	fetchPosts
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Blog)
