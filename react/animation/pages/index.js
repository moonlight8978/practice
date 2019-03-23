import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
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
  )
}
