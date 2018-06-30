import React from 'react'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
    <React.Fragment>
      <Layout
        renderNav={(isSidebarOpen, toggleSidebar) => (
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        renderSidebar={isSidebarOpen => (
          <Sidebar isOpen={isSidebarOpen} />
        )}
      >

        <div className="container">
          Index page
        </div>
      </Layout>
    </React.Fragment>
  )
}
