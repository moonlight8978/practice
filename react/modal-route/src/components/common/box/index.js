import React from 'react'

import styles from './box.module.scss'

function Box({ children }) {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}

export default Box
