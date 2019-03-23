import Link from 'next/link'
import React from 'react'

import Layout from '../components/layout'
import FKGApi from '../api/fkg-api'

import '../styles/index.scss'

class App extends React.Component {
  state = {
    fkgs: {}
  }

  async componentDidMount() {
    const fkgs = await FKGApi.all()
    this.setState({ fkgs })
  }

  render() {
    const { fkgs } = this.state
    return (
      <Layout>
        {Object.keys(fkgs).length ? (
          Object.values(fkgs).map(fkg => (
            <div key={fkg.id}>
              <Link href={`/fkg?id=${fkg.id}`}>
                <a>{fkg.name}</a>
              </Link>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    )
  }
}

export default App
