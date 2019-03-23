import Head from 'next/head'

import Header from './header'

import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Next.js App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <div className="nextjs-app">
      <Header />

      <div className="container">
        {children}
      </div>
    </div>
  </div>
)

export default Layout
