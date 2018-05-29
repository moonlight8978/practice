import Head from 'next/head'

import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Next.js App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  </div>
)

export default Layout
