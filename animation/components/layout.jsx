import React from 'react'

import Head from './head'

import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarOpen: false
    }
  }

  toggleSidebar = event => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { renderNav, renderSidebar, children } = this.props
    const { isSidebarOpen } = this.state

    return (
      <div className="page-outer">
        <Head />

        {renderNav && renderNav(isSidebarOpen, this.toggleSidebar)}
        {renderSidebar && renderSidebar(isSidebarOpen)}
        {children}
      </div>
    )
  }
}

export default Layout
