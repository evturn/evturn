import React from 'react'
import BackboneIcon from './Backbone'
import ChromeIcon from './Chrome'
import ExpressIcon from './Express'
import GitIcon from './Git'
import GulpIcon from './Gulp'
import HandlebarsIcon from './Handlebars'
import JavaScriptIcon from './JavaScript'
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
import UbuntuIcon from './Ubuntu'
import WebpackIcon from './Webpack'
import WebSocketIcon from './WebSocket'

export const SVGIcon = ({ name, ...rest }) => {
  console.log(name)
  const Component = icons[name]
  return <Component {...rest} />
}

const icons = {
  backbone: BackboneIcon,
  chrome: ChromeIcon,
  express: ExpressIcon,
  git: GitIcon,
  gulp: GulpIcon,
  handlebars: HandlebarsIcon,
  javascript: JavaScriptIcon,
  less: LessIcon,
  mongodb: MongoDBIcon,
  node: NodeIcon,
  npm: NPMIcon,
  photoshop: PhotoshopIcon,
  postgresql: PostgresqlIcon,
  rails: RailsIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  reduxobservable: ReduxObservableIcon,
  rxjs: RxJSIcon,
  sass: SassIcon,
  swift: SwiftIcon,
  ubuntu: UbuntuIcon,
  webpack: WebpackIcon,
  websocket: WebSocketIcon,
}

export default SVGIcon