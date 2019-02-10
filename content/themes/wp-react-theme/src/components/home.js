import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Home = () => (
	<section className='page page--home'>
		<main>
			<Container>
				<Row className='justify-content-md-center'>
					<Col xs='12' md='8'>
						<p>
							React app with <code>WordPress</code>
						</p>
					</Col>
				</Row>
			</Container>
		</main>
	</section>
)

export default Home
