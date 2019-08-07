import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import './index.scss'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { store } from './redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
