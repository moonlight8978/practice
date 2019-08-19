import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { unauthorizedRoute } from './components/authorization'
import { SignIn } from './screens'

const SignInScreen = unauthorizedRoute(SignIn)

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignInScreen} />
    </Switch>
  )
}
