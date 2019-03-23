import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AuthContext } from './auth'
import { SignIn, SignUp } from './routes'
import './App.css'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <AuthContext>
        <BrowserRouter>
          <Switch>
            <Route component={SignIn} path="/" exact />
            <Route component={SignUp} path="/sign_up" exact />
          </Switch>
        </BrowserRouter>
      </AuthContext>
    )
  }
}

export default App
