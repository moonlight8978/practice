import React from 'react'
import Link from 'next/link'

import './sidebar.scss'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <aside className={this.props.isOpen ? 'active' : ''}>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            <Link href="/">
              <a>Index</a>
            </Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link href="/twitch">
              <a>Twitch</a>
            </Link>
          </li>
        </ul>
      </aside>
    )
  }
}

export default Sidebar
