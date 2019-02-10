import React from 'react'

const Post = ({ post } = props) => {
	return (
		<div>
			<h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
			<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
		</div>
	)
}

export default Post
