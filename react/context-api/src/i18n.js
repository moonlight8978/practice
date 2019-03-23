import React from 'react'

const I18N = {
  en: {
    greeting: 'Hello',
    welcome: 'Welcome',
  },
  ja: {
    greeting: 'こんにちは',
    welcome: 'ようこそ',
  }
}

const { Provider, Consumer } = React.createContext({
  language: 'en',
  i18n: I18N.en,
  changeLanguage: () => {},
})

function withI18N(Component) {
  return function functionName(props) {
    return (
      <Consumer>
        {({ language, i18n, changeLanguage }) => (
          <Component
            language={language}
            i18n={i18n}
            changeLanguage={changeLanguage}
            {...props}
          />
        )}
      </Consumer>
    )
  }
}

export {
  I18N,
  withI18N,
  Provider as I18NProvider,
  Consumer as I18NConsumer,
}
