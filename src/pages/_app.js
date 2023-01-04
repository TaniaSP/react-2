import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { wrapper } from '../store/store'
import { Provider } from 'react-redux'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any, pageProps: PropTypes.any
}
