import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import { reducer, ignoredActions } from './reducers'

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions,
      },
    }),
})

setupListeners(store.dispatch)
const persistor = persistStore(store)

export { store, persistor }
