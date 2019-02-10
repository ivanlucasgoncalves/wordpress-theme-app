import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { Helmet } from 'react-helmet'

import Post from '../components/post'
import { fetchPosts, setMorePosts } from '../actions'

class Blog extends React.Component {
	componentDidMount({ fetchPosts, currentPage } = this.props) {
		fetchPosts(currentPage)
	}
	handleClick = (e, { setMorePosts, currentPage } = this.props) => {
		e.preventDefault()
		setMorePosts(currentPage)
	}
	render({ fetching, posts, currentPage, totalPages } = this.props) {
		return (
			<section className='page page--blog'>
				<Helmet>
					<title>WordPress and Web Management Blog - The Code Company</title>
				</Helmet>
				<main>
					<Container>
						<Row className='justify-content-md-center'>
							<Col xs='12' md='8'>
								{posts.map((post, index) => (
									<Post key={post.id} index={index} post={post} />
								))}
								{currentPage < totalPages ? (
									<Button color='primary' size='lg' onClick={this.handleClick}>
										{fetching ? 'Loading...' : 'Load Older Posts'}
									</Button>
								) : (
									''
								)}
							</Col>
						</Row>
					</Container>
				</main>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	fetching: state.posts.fetching,
	posts: state.posts.posts,
	currentPage: state.posts.currentPage,
	totalPages: state.posts.totalPages
})

const mapDispatchToProps = {
	fetchPosts,
	setMorePosts
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Blog)
