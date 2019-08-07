import React, { useState, useCallback } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import styles from './layout.module.scss'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function AppLayout({ children }) {
  return <Layout className={styles.container}>{children}</Layout>
}

export default React.memo(AppLayout)
