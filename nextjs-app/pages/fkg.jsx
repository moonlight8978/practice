import React from 'react'
import { withRouter } from 'next/router'

import Layout from '../components/layout'
import FKGApi from '../api/fkg-api'

class FKG extends React.Component {
  state = {
    fkg: null
  }

  async componentDidMount() {
    const fkg = await FKGApi.find(this.props.router.query.id)

    setTimeout(() => {
      this.setState({ fkg })
    }, 3000);
  }

  render() {
    const { fkg } = this.state

    return (
      <Layout>
        {fkg !== null ? (
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{fkg.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{fkg.name}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>
            Loading...
          </div>
        )}
      </Layout>
    )
  }
}

export default withRouter(FKG)
