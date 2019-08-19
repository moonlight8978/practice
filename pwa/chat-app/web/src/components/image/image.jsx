import React from 'react'
import classnames from 'classnames'

import styles from './image.module.scss'

export default function Image({ alt, src, className }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className={styles.thumb} />
    </div>
  )
}
