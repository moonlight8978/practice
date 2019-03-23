import React, { Component } from 'react'

import { I18NProvider, I18N } from './i18n'
import Home from './home'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      i18n: I18N.en,
      changeLanguage: this.changeLanguage
    }
  }

  changeLanguage = language => {
    this.setState({
      language,
      i18n: I18N[language]
    })
  }

  render() {
    return (
      <I18NProvider value={this.state}>
        <div className="App">
          <Home />
        </div>
      </I18NProvider>
    )
  }
}

export default App
