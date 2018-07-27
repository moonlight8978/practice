import React from 'react'

import { withI18N } from './i18n'

function Home({ language, changeLanguage, i18n }) {
  return (
    <div>
      <select value={language} onChange={event => changeLanguage(event.target.value)}>
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
      {i18n.greeting}
    </div>
  )
}

export default withI18N(Home)
