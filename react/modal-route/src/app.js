import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './layout/navbar'
import Unit from './components/unit'
import Units from './components/units'
import FormAddUnit from './components/form-add-unit'
import { NotFound } from './components/common/errors'
import Paths from './config/paths'
import styles from './app.module.scss'

class Layout extends Component {
  state = {}

  static getDerivedStateFromProps(props, state) {
    const { location, history } = props
    console.log(history, location.state)
    if (
      history.action !== 'POP' &&
      (!location.state || !location.state.modal) ||
      state.prevLocation === undefined
    ) {
      return { prevLocation: location }
    }

    return null
  }

  render() {
    const { location } = this.props
    const { prevLocation } = this.state
    const isModal = !!(
      location.state &&
      location.state.modal &&
      prevLocation !== location
    )
    console.log("isModal:", isModal, prevLocation)

    return (
      <React.Fragment>
        <Navbar />
        <div>asdasdasd</div>
        <div className={`container ${styles.app}`}>
          <Switch location={isModal ? prevLocation : location}>
            <Route exact path={Paths.units} component={Units} />
            <Route
              exact
              path={Paths.newUnit}
              render={props => (
                <React.Fragment>
                  <Units />
                  <FormAddUnit onClose={() => props.history.push('/')} />
                </React.Fragment>
              )}
            />
            <Route exact path={Paths.unit} component={Unit} />
            <Route component={NotFound} />
          </Switch>

          {isModal ? <Route exact path={Paths.newUnit} component={FormAddUnit} /> : null}
        </div>
      </React.Fragment>
    )
  }
}

function App() {
  return (
    <Router>
      <Route component={Layout} />
    </Router>
  )
}

export default App
