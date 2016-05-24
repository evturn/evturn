import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'

import configureStore from './store'
import createRoutes from './routes'

import initialState from 'data'

import FontFaceObserver from 'fontfaceobserver'

import 'containers/App/style.css'

const fonts = [
  new FontFaceObserver('Merriweather'),
  new FontFaceObserver('devicon'),
  new FontFaceObserver('Source Sans Pro'),
  new FontFaceObserver('evcon'),
  new FontFaceObserver('Raleway')
]

Promise.all(fonts).then(_ =>  console.log('We got them fonts dog.'));

const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes()

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
)
