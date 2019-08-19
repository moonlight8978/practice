import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.scss'

import App from './app'
import * as serviceWorker from './serviceWorker'
import { store } from './redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
