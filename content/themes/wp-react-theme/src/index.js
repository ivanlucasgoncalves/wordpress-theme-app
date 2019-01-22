import React from 'react'
import { render } from 'react-dom'

import App from './containers/app'
import './styles/app.scss'

import store from './store'

render(<App store={store} />, document.getElementById('app'))
