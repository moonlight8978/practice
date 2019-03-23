import React from 'react'

import Loading from '../common/loading'
import ErrorAlert from '../common/error-alert'
import Box from '../common/box'
import UnitsApi from '../../apis/units'
import styles from './units.module.scss'

class Units extends React.Component {
  state = {
    units: [],
    isFetching: true,
    errorMessage: ''
  }

  async componentDidMount() {
    let newState = {}
    try {
      const units = await UnitsApi.all()
      newState = { units }
    } catch (error) {
      console.log(error)
      newState = { errorMessage: error.message }
    } finally {
      this.setState(Object.assign(newState, {}, { isFetching: false }))
    }
  }

  render() {
    const { units, errorMessage, isFetching } = this.state

    return (
      <Loading isFetching={isFetching}>
        {() => errorMessage ? (
          <ErrorAlert message={errorMessage} />
        ) : (
          <Box>
            <div className={styles.units}>
              <div className="row">
                <div className="col-3">ID</div>
                <div className="col-9">Name</div>
              </div>

              {units.map(unit => <Unit key={unit.id} unit={unit} />)}
            </div>
          </Box>
        )}
      </Loading>
    )
  }
}

function Unit({ unit }) {
  const { id, name } = unit

  return (
    <div className="row">
      <div className="col-3">{id}</div>
      <div className="col-9">{name}</div>
    </div>
  )
}

export default Units
