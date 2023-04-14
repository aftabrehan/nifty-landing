import types from './types'

export const setTheme = theme => async dispatch =>
  dispatch({ type: types.SET_THEME, payload: theme })
