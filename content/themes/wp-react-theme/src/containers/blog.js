import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions'
import Post from '../components/post'

class Blog extends React.Component {
	componentDidMount() {
		this.props.fetchPosts()
	}
	render({ posts } = this.props) {
		return (
			<div className='page page-blog'>
				<header className='header'>
					<Link to='/'>Home</Link>
					<main>
						{posts.map(post => (
							<Post key={post.id} post={post} />
						))}
					</main>
				</header>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts
})

const mapDispatchToProps = {
	fetchPosts
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Blog)
