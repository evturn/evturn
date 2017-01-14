import React from 'react'
import Router from 'react-router/HashRouter'
import AsyncRoute from 'components/AsyncRoute'
import { importDefault } from 'containers/LazyLoad'
import Head from 'containers/App/Head'
import Header from 'containers/Header'
import css from './style.css'

export const App = props => {
  return (
    <Router>
      {({ router }) =>
        <div className={css.root}>
          <Head />
          <Header />
          <AsyncRoute
            pattern='/'
            exactly
            component={_ => importDefault(import('containers/Home'))} />
          <AsyncRoute
            pattern='/web'
            router={router}
            component={_ => importDefault(import('containers/Web'))} />
          <AsyncRoute
            pattern='/software'
            component={_ => importDefault(import('containers/Software'))} />
          <AsyncRoute
            pattern='/mobile'
            component={_ => importDefault(import('containers/Mobile'))} />
          <AsyncRoute
            pattern='/contact'
            component={_ => importDefault(import('containers/Contact'))} />
        </div>}
    </Router>
  )
}

export default App