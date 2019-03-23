import React from 'react'

class UsingComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // compare next props/state with old props/state

    return false
  }

  render() {
    console.log(`<UsingComponent /> no.${this.props.n} was rendered`)
    return (
      <div>
        PureComponent
      </div>
    )
  }
}

export default UsingComponent
