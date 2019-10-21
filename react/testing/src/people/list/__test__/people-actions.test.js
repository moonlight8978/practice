import sinon from 'sinon'

import peopleTypes from '../people-types'
import peopleActions from '../people-actions'
import { initialState } from '../people-reducer'
import { PeopleApi } from '../../../api'
import { mockStore } from '../../../test-utils/helpers'

describe('peopleActions.creator', () => {
  it('should create action to request fetching people', () => {
    const expected = { type: peopleTypes.REQUEST }
    expect(peopleActions.creator.fetchPeople()).toEqual(expected)
  })

  it('should create action to set people hash', () => {
    const person = { uuid: 'uuid-1', name: 'Doan Chi Binh' }
    const expected = {
      type: peopleTypes.SUCCESS,
      payload: { 'uuid-1': person },
    }
    expect(peopleActions.creator.setPeople([person])).toEqual(expected)
  })

  it('should create action to set error', () => {
    const error = new Error('hello error')
    const expected = {
      type: peopleTypes.ERROR,
      payload: 'hello error',
    }
    expect(peopleActions.creator.setError(error)).toEqual(expected)
  })
})

describe('peopleActions', () => {
  const person = { uuid: 'uuid-1', name: 'Doan Chi Binh' }

  beforeEach(() => {
    sinon.replace(
      PeopleApi,
      'fetch',
      sinon.stub().returns(Promise.resolve([person]))
    )
  })

  afterEach(() => {
    sinon.restore()
  })

  it('should dispatch correct actions when fetching success', async () => {
    const store = await mockStore(
      { people: initialState },
      peopleActions.fetchPeople()
    )
    expect(store.getActions()).toEqual([
      { type: peopleTypes.REQUEST },
      { type: peopleTypes.SUCCESS, payload: { 'uuid-1': person } },
    ])
  })

  it('should not dispatch actions when data is still fetching', async () => {
    const store = await mockStore(
      { people: { isFetching: true } },
      peopleActions.fetchPeople()
    )
    expect(store.getActions()).toEqual([])
  })
})
