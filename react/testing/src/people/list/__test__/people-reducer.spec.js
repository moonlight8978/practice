import peopleReducer, { initialState } from '../people-reducer'
import peopleTypes from '../people-types'

describe('peopleReducer', () => {
  it('should return initial state', () => {
    expect(peopleReducer(undefined, {})).toEqual({
      isFetching: false,
      data: {},
      error: null,
    })
  })

  it('should handle fetching people REQUEST', () => {
    expect(
      peopleReducer(initialState, {
        type: peopleTypes.REQUEST,
      })
    ).toEqual({ isFetching: true, data: {}, error: null })
  })

  it('should handle fetching people SUCCESS', () => {
    const people = { 'uuid-1': { uuid: 'uuid-1', name: 'ABC' } }
    expect(
      peopleReducer(initialState, {
        type: peopleTypes.SUCCESS,
        payload: people,
      })
    ).toEqual({ isFetching: false, data: people, error: null })
  })

  it('should handle fetching people ERROR', () => {
    expect(
      peopleReducer(initialState, {
        type: peopleTypes.ERROR,
        payload: 'Something went wrong',
      })
    ).toEqual({ isFetching: false, data: {}, error: 'Something went wrong' })
  })
})
