import peopleTypes from './people-types'

export const initialState = {
  error: null,
  isFetching: false,
  data: {},
}

export default function peopleReducer(state = initialState, { type, payload }) {
  switch (type) {
    case peopleTypes.REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      }

    case peopleTypes.SUCCESS:
      return {
        error: null,
        isFetching: false,
        data: payload,
      }

    case peopleTypes.ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
      }

    default:
      return state
  }
}
