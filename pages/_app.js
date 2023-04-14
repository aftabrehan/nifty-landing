import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppWrapper from 'components/app-wrapper'

import { store, persistor } from 'store'
import { useRootListeners } from 'lib/hooks'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  useRootListeners()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </PersistGate>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
