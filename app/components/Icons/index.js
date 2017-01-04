import React, { Children } from 'react'
import BackboneIcon from './Backbone'
import BusinessIcon from './Business'
import ChromeIcon from './Chrome'
import CodeIcon from './Code'
import CSSModulesIcon from './CSSModules'
import ExpressIcon from './Express'
import FirebaseIcon from './Firebase'
import GitIcon from './Git'
import GithubIcon from './Github'
import GulpIcon from './Gulp'
import HandlebarsIcon from './Handlebars'
import JavaScriptIcon from './JavaScript'
import JQueryIcon from './JQuery'
import LessIcon from './Less'
import MongoDBIcon from './MongoDB'
import NodeIcon from './Node'
import NPMIcon from './NPM'
import PhotoshopIcon from './Photoshop'
import PostgresqlIcon from './Postgresql'
import RailsIcon from './Rails'
import ReactIcon from './React'
import ReduxIcon from './Redux'
import ReduxObservableIcon from './ReduxObservable'
import RxJSIcon from './RxJS'
import SassIcon from './Sass'
import SwiftIcon from './Swift'
import TwitterIcon from './Twitter'
import UbuntuIcon from './Ubuntu'
import WebIcon from './Web'
import WebpackIcon from './Webpack'
import WebSocketIcon from './WebSocket'
import WordpressIcon from './Wordpress'

export const SVGIcon = ({ name, children, ...rest }) => {
  const { component:Component, displayName } = icons[name]
  return (
    <div>
      <Component {...rest} />
      {children ? Children.only(children({ displayName })) : null }
    </div>
  )
}

const icons = {
  backbone: {
    component: BackboneIcon,
    displayName: 'Backbone'
  },
  business: {
    component: BusinessIcon,
    displayName: 'Company'
  },
  chrome: {
    component: ChromeIcon,
    displayName: 'Chrome'
  },
  code: {
    component: CodeIcon,
    displayName: 'Code'
  },
  cssmodules: {
    component: CSSModulesIcon,
    displayName: 'CSS Modules'
  },
  express: {
    component: ExpressIcon,
    displayName: 'Express'
  },
  firebase: {
    component: FirebaseIcon,
    displayName: 'Firebase'
  },
  git: {
    component: GitIcon,
    displayName: 'Git'
  },
  github: {
    component: GithubIcon,
    displayName: 'GitHub'
  },
  gulp: {
    component: GulpIcon,
    displayName: 'Gulp'
  },
  handlebars: {
    component: HandlebarsIcon,
    displayName: 'Handlebars'
  },
  javascript: {
    component: JavaScriptIcon,
    displayName: 'JavaScript'
  },
  jquery: {
    component: JQueryIcon,
    displayName: 'jQuery'
  },
  less: {
    component: LessIcon,
    displayName: 'LESS'
  },
  mongodb: {
    component: MongoDBIcon,
    displayName: 'MongoDB'
  },
  node: {
    component: NodeIcon,
    displayName: 'Node'
  },
  npm: {
    component: NPMIcon,
    displayName: 'npm'
  },
  photoshop: {
    component: PhotoshopIcon,
    displayName: 'Photoshop'
  },
  postgresql: {
    component: PostgresqlIcon,
    displayName: 'Postgresql'
  },
  rails: {
    component: RailsIcon,
    displayName: 'Rails'
  },
  react: {
    component: ReactIcon,
    displayName: 'React'
  },
  redux: {
    component: ReduxIcon,
    displayName: 'Redux'
  },
  reduxobservable: {
    component: ReduxObservableIcon,
    displayName: 'Redux Observable'
  },
  rxjs: {
    component: RxJSIcon,
    displayName: 'RxJS'
  },
  sass: {
    component: SassIcon,
    displayName: 'Sass'
  },
  swift: {
    component: SwiftIcon,
    displayName: 'Swift'
  },
  twitter: {
    component: TwitterIcon,
    displayName: 'Twitter'
  },
  ubuntu: {
    component: UbuntuIcon,
    displayName: 'Ubuntu'
  },
  web: {
    component: WebIcon,
    displayName: 'Website'
  },
  webpack: {
    component: WebpackIcon,
    displayName: 'Webpack'
  },
  websocket: {
    component: WebSocketIcon,
    displayName: 'Web Sockets'
  },
  wordpress: {
    component: WordpressIcon,
    displayName: 'Wordpress'
  },
}

export default SVGIcon