import React, { useState, useCallback } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import styles from './layout.module.scss'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function AppLayout({ children, sideList }) {
  const [collapsed, setCollapsed] = useState(false)
  const { defaultValue, items } = sideList

  return (
    <Layout className={styles.container}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultValue]}>
          {items.map(item => (
            <Menu.Item key="1">
              {item.icon}
              <span>{item.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(collapsed => !collapsed)}
          />
        </Header>

        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  )
}

AppLayout.defaultProps = {
  sideList: {
    items: [],
    defaultValue: '',
  },
}

export default React.memo(AppLayout)
