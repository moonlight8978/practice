import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import authorizationSelectors from './authorization.selectors'

const mapStateToProps = state => ({
  isAuthenticated: authorizationSelectors.getIsAuthenticated(state),
})

export default function authorizedRoute(Component) {
  function AuthorizedRoute({ isAuthenticated, ...props }) {
    if (isAuthenticated) {
      return <Component {...props} />
    }
    return <Redirect to="/" />
  }

  return connect(
    mapStateToProps,
    null
  )(AuthorizedRoute)
}

export function unauthorizedRoute(Component) {
  function UnauthorizedRoute({ isAuthenticated, ...props }) {
    if (!isAuthenticated) {
      return <Component {...props} />
    }
    return <Redirect to="/conversations" />
  }

  return connect(
    mapStateToProps,
    null
  )(UnauthorizedRoute)
}
