import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
	<div className='page page-home'>
		<header className='header'>
			<Link to='/blog'>Blog</Link>
			<p>
				React app with <code>WordPress</code>
			</p>
			<a
				className='header__link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				Learn React
			</a>
		</header>
	</div>
)

export default Home
