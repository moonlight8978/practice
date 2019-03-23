import React from 'react'
import { Link } from 'react-router-dom'

import { signUp } from '../firebase/user'
import { AuthContext } from '../auth'

class SignUpForm extends React.Component {
  state = {
    username: '',
    displayName: '',
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSignUp = event => {
    event.preventDefault()
    this.signUpThenSignIn()
  }

  signUpThenSignIn = async () => {
    const { history, signIn } = this.props
    const user = await signUp(this.state)
    signIn(user.username)
    history.push('/')
  }

  render() {
    const { username, displayName } = this.state
    return (
      <form onSubmit={this.handleSignUp}>
        <input
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <br />
        <input
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          placeholder="Display name"
        />
        <br />
        <button type="submit">Sign up</button>
        <br />
        <Link to="/">Sign in</Link>
      </form>
    )
  }
}

export function SignUp({ history }) {
  return (
    <AuthContext.Unauthorized>
      {({ signIn }) => <SignUpForm signIn={signIn} history={history} />}
    </AuthContext.Unauthorized>
  )
}
