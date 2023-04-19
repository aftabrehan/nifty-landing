import types from './types'

export const setTheme = isDark => async dispatch =>
  dispatch({ type: types.SET_THEME, payload: isDark })
