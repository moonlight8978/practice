import React from 'react'
import { connect } from 'react-redux'

import authorizationSelectors from './authorization.selectors'

const mapStateToProps = state => ({
  isAuthenticated: authorizationSelectors.getIsAuthenticated(state),
})

export default function authorizedRoute(Component) {
  function AuthorizedRoute({ isAuthenticated, ...props }) {
    if (isAuthenticated) {
      return <Component {...props} />
    } else {
      return <div>Redirect to sign in page</div>
    }
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
    } else {
      return <div>Redirect to home page</div>
    }
  }

  return connect(
    mapStateToProps,
    null
  )(UnauthorizedRoute)
}
