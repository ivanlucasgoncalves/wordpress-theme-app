import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
	<React.Fragment>
		<Helmet>
			<title>The Code Company | Enterprise WordPress Development</title>
		</Helmet>
		<Header />
		{children}
		<Footer />
	</React.Fragment>
)

export default Layout
