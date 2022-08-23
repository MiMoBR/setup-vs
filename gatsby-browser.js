import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import birdApp from './src/store/birds/birds'

const store = createStore(birdApp)
// import { ModalLoadingProvider } from '@hooks/ModalLoading'
// import GlobalStyleComponent from './src/styles/global'
// import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    {/* <ModalLoadingProvider> */}
      {/* <GlobalStyleComponent /> */}
      {element}
    {/* </ModalLoadingProvider> */}
  </Provider>
)

export const wrapPageElement = ({ element }) => (
  <Provider store={store}>
    {/* <ModalLoadingProvider> */}
      {/* <GlobalStyleComponent /> */}
      {element}
    {/* </ModalLoadingProvider> */}
  </Provider>
)
