import React from 'react'

import './navbar.scss'

class Navbar extends React.Component {
  handleOnclick = event => {
    this.props.toggleSidebar()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Navbar</a>

        <button
          type="button"
          className={"hamburger-button" + (this.props.isSidebarOpen ? ' active' : '')}
          onClick={this.handleOnclick}
        >
          <span className="hamburger-button-top"></span>
          <span className="hamburger-button-mid"></span>
          <span className="hamburger-button-bottom"></span>
        </button>
      </nav>
    )
  }
}

export default Navbar
