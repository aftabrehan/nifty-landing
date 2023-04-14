import types from './types'
import init from './init'

export const appearanceReducer = (state = init || {}, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return { ...state, theme: action.payload }

    default:
      return state
  }
}
