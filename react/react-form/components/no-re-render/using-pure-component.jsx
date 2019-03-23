import React from 'react'

class UsingPureComponent extends React.PureComponent {
  render() {
    console.log(`<UsingPureComponent /> no.${this.props.n} was rendered`)
    return (
      <div>
        PureComponent
      </div>
    )
  }
}

export default UsingPureComponent
