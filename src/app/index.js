import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory, applyRouterMiddleware } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'react-router-scroll'
import { createHashHistory } from 'history'
import configureStore from './store'
import createRoutes from './routes'
import 'containers/App/style.css'

import { videos, } from './containers/App/data'
import ui from './ui.json'
const initialState = {
  site: ui,
  video: {
    playlist: sortVideos(videos),
    initialized: false,
    ready: false,
    done: false,
    id: 0,
  }
}

function sortVideos(videos) {
  const firstHalf = videos.slice(0, 5)
  const secondHalf = videos.slice(6, videos.length)

  function shuffle(items, acc) {
    if (acc.length === items.length) {
      return acc
    }
    const randomSelection = items[Math.floor(Math.random() * items.length)]

    if (!acc.includes(randomSelection)) {
      acc.push(randomSelection)
    }
    return shuffle(items, acc)
  }

  return shuffle(firstHalf, [ videos[0] ]).concat(shuffle(secondHalf, []))
}

const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(initialState)

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
)
