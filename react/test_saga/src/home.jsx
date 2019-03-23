import React, { Component } from 'react'
import { connect } from 'react-redux'

import { types } from './home.constants'

class Home extends Component {
  render() {
    const { test, onClick, fromNode } = this.props

    return (
      <div>
        <h1>Hello</h1>
        <span>{test}</span>
        <button onClick={onClick}>Click me</button>
        <button onClick={fromNode}>From node</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({ type: types.call }),
  fromNode: () => dispatch({ type: types.fromNode }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
