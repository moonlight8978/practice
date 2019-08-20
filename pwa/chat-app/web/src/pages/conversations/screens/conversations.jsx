import React from 'react'
import { Layout } from 'antd'
import classnames from 'classnames'

function Conversations() {
  return (
    <Layout>
      <Layout.Header className={classnames('header')}>
        {/* <Image
          src="/messenger-icon.png"
          alt="Messenger"
          className={styles.logo}
        /> */}
      </Layout.Header>

      <Layout.Content className=""></Layout.Content>
    </Layout>
  )
}

export default Conversations
