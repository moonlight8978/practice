import React from 'react'

import logo from './logo.svg'
import styles from './app.module.scss'
import { Layout } from './components/layout'
import conversations from './mocks/conversations'

function App() {
  return (
    <Layout>
      <div className={styles.container}>
        <aside className={styles.leftSidebar}>
          <nav>Messenger</nav>

          <section></section>
        </aside>

        <main className={styles.main}>
          <nav>User A</nav>

          <section>Messages</section>
        </main>
      </div>
    </Layout>
  )
}

export default App
