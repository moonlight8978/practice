import _ from 'lodash'

import { PeopleApi } from '../../api'

import peopleTypes from './people-types'

export default {
  creator: {
    fetchPeople() {
      return { type: peopleTypes.REQUEST }
    },
    setPeople(people) {
      return { type: peopleTypes.SUCCESS, payload: _.keyBy(people, 'uuid') }
    },
    setError(error) {
      return {
        type: peopleTypes.ERROR,
        payload: error.message || 'Something went wrong',
      }
    },
  },
  fetchPeople() {
    return async (dispatch, getState) => {
      const {
        people: { isFetching },
      } = getState()
      if (isFetching) {
        return
      }

      dispatch(this.creator.fetchPeople())
      try {
        const people = await PeopleApi.fetch()
        dispatch(this.creator.setPeople(people))
      } catch (error) {
        dispatch(this.creator.setError(error))
      }
    }
  },
}
