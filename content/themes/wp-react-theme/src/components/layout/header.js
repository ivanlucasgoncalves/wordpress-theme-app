import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

const Header = props => (
	<header className='header header--bg-black'>
		<Container>
			<Row className='justify-content-md-center'>
				<Col>
					<nav className='header__main-navigation d-flex align-items-center justify-content-end'>
						<ul className='d-flex align-items-center'>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/'>Capabilities</NavLink>
							</li>
							<li>
								<NavLink to='/'>About</NavLink>
							</li>
							<li>
								<NavLink to='/blog'>Blog</NavLink>
							</li>
							<li>
								<NavLink to='/'>Contact</NavLink>
							</li>
						</ul>
					</nav>
				</Col>
			</Row>
		</Container>
	</header>
)

export default Header
