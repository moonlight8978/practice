import React from 'react'
import { Link } from 'react-router-dom'

import Paths from '../../config/paths'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.navbarOuter}>
      <div className={`${styles.navbarInner}`}>
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to={Paths.units}>Units</Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLink}`}
                to={{ pathname: Paths.newUnit, state: { modal: true } }}
              >
                New unit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
