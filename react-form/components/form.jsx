import React from 'react'

import Input from './input'
import Dump from './dump'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: 18,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name, age } = this.state

    return (
      <form>
        <Input
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <Dump />
      </form>
    )
  }
}

export default Form
