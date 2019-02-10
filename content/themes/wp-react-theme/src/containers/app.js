import React from 'react'
import { PropTypes } from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Blog from './blog'
import Home from '../components/home'
import Layout from '../components/layout/layout'

const App = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/blog' component={Blog} />
				</Switch>
			</Layout>
		</ConnectedRouter>
	</Provider>
)

App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App
