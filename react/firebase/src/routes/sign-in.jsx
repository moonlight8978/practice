import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import { AuthContext } from '../auth'

class SignInForm extends React.Component {
  state = {
    username: '',
    displayName: '',
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSignIn = event => {
    event.preventDefault()
  }

  render() {
    const { username } = this.state
    return (
      <form onSubmit={this.handleSignIn}>
        <input
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <button type="submit">Sign in</button>
        <Link to="/sign_up">Sign up</Link>
      </form>
    )
  }
}

export function SignIn() {
  return (
    <React.Fragment>
      <AuthContext.Authorized>
        <Redirect to="/" />
      </AuthContext.Authorized>
      <AuthContext.Unauthorized>
        {({ signIn }) => <SignInForm signIn={signIn} />}
      </AuthContext.Unauthorized>
    </React.Fragment>
  )
}
