import React from 'react'
import { render } from 'react-dom'

import App from './containers/app'
import './styles/app.scss'

import store, { history } from './store'

render(<App store={store} history={history} />, document.getElementById('app'))
