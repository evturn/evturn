import React from 'react'
import BackboneIcon from './Backbone'
import ChromeIcon from './Chrome'
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
import WebpackIcon from './Webpack'
import WebSocketIcon from './WebSocket'
import WordpressIcon from './Wordpress'

export const SVGIcon = ({ name, ...rest }) => {
  const Component = icons[name]
  return !Component
    ? <div>{name}</div>
    : <Component {...rest} />
}

const icons = {
  backbone: BackboneIcon,
  chrome: ChromeIcon,
  express: ExpressIcon,
  firebase: FirebaseIcon,
  git: GitIcon,
  github: GithubIcon,
  gulp: GulpIcon,
  handlebars: HandlebarsIcon,
  javascript: JavaScriptIcon,
  jquery: JQueryIcon,
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
  twitter: TwitterIcon,
  ubuntu: UbuntuIcon,
  webpack: WebpackIcon,
  websocket: WebSocketIcon,
  wordpress: WordpressIcon,
}

export default SVGIcon