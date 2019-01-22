import React from 'react'
import { PropTypes } from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Blog from './blog'
import Home from '../components/home'

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
			</Switch>
		</Router>
	</Provider>
)

App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App
