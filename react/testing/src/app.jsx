import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './app.module.scss'
import { PeopleList } from './people/list'

function App() {
  return (
    <Switch>
      <Route exact path="/people" component={PeopleList} />
      <Route exact path="/people/:id" component={PeopleList} />
    </Switch>
  )
}

export default App
