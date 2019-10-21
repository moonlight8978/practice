import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import './index.css'
import * as serviceWorker from './serviceWorker'

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
