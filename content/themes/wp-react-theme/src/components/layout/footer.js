import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => (
	<footer className='footer footer--bg-white'>
		<Container>
			<Row>
				<Col>
					<nav className='footer__navigation d-flex align-items-center justify-content-start'>
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
	</footer>
)

export default Footer
