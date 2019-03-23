import React from 'react'

const initialState = {
  username: '',
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
}

const { Provider, Consumer } = React.createContext(initialState)

export class AuthContext extends React.Component {
  static Unauthorized = ({ children }) => (
    <Consumer>
      {({ signOut, ...rest }) => {
        if (rest.isAuthenticated) {
          return <div>Hello {rest.username}</div>
        }
        return typeof children === 'function' ? children(rest) : children
      }}
    </Consumer>
  )

  static Authorized = ({ children }) => (
    <Consumer>
      {({ signIn, ...rest }) => {
        if (!rest.isAuthenticated) {
          return null
        }
        return typeof children === 'function' ? children(rest) : children
      }}
    </Consumer>
  )

  signIn = username => {
    this.setState({ username, isAuthenticated: true })
  }

  signOut = () => {
    this.setState({ username: '', isAuthenticated: false })
  }

  state = {
    ...initialState,
    signIn: this.signIn,
    signOut: this.signOut,
  }

  render() {
    return <Provider value={this.state} {...this.props} />
  }
}
