import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { unauthorizedRoute, authorizedRoute } from './pages/auth'
import { SignIn } from './pages/auth/screens'
import { Conversations } from './pages/conversations/screens'

const SignInScreen = unauthorizedRoute(SignIn)
const ConversationsScreen = authorizedRoute(Conversations)

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignInScreen} />
      <Route exact path="/conversations" component={ConversationsScreen} />
    </Switch>
  )
}
