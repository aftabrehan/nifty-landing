export const createActionTypes = actions => {
  const actionTypes = {}

  actions.map(action => {
    actionTypes[`${action}_REQUEST`] = `${action}_REQUEST`
    actionTypes[`${action}_SUCCESS`] = `${action}_SUCCESS`
    actionTypes[`${action}_ERROR`] = `${action}_ERROR`
    actionTypes[action] = action
  })

  return actionTypes
}

export * from './utils'
export * from './hooks'
