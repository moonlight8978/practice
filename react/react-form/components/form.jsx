import React from 'react'

import Dump from '../components/re-render/dump'
import UsingPureComponent from '../components/no-re-render/using-pure-component'
import UsingComponent from '../components/no-re-render/using-component'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name } = this.state
    const { children } = this.props

    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          value={name}
        />

        {children ? children : (
          <div>
            <Dump n="1" />

            <UsingPureComponent n="1" />
            <UsingComponent n="1" />
          </div>
        )}
      </form>
    )
  }
}

export default Form
