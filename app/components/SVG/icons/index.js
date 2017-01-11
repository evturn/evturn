import { importDefault } from 'containers/LazyLoad'

const importModule = filename => {
  return _ => importDefault(import(`components/SVG/icons/${filename}`))
}

const icons = {
  backbone: {
    module: importModule('Backbone'), displayName: 'Backbone'
  },
  business: {
    module: importModule('Business'), displayName: 'Business'
  },
  chrome: {
    module: importModule('Chrome'), displayName: 'Chrome'
  },
  code: {
    module: importModule('Code'), displayName: 'Code'
  },
  company: {
    module: importModule('Company'), displayName: 'Company'
  },
  cssmodules: {
    module: importModule('CSSModules'), displayName: 'CSS Modules'
  },
  email: {
    module: importModule('Email'), displayName: 'Mail'
  },
  express: {
    module: importModule('Express'), displayName: 'Express'
  },
  firebase: {
    module: importModule('Firebase'), displayName: 'Firebase'
  },
  git: {
    module: importModule('Git'), displayName: 'Git'
  },
  github: {
    module: importModule('Github'), displayName: 'GitHub'
  },
  gulp: {
    module: importModule('Gulp'), displayName: 'Gulp'
  },
  handlebars: {
    module: importModule('Handlebars'), displayName: 'Handlebars'
  },
  javascript: {
    module: importModule('JavaScript'), displayName: 'JavaScript'
  },
  jquery: {
    module: importModule('JQuery'), displayName: 'jQuery'
  },
  launch: {
    module: importModule('Launch'), displayName: 'Launch'
  },
  less: {
    module: importModule('Less'), displayName: 'LESS'
  },
  linkedin:{
    module: importModule('Linkedin'), displayName: 'Linkedin'
  },
  mongodb: {
    module: importModule('MongoDB'), displayName: 'MongoDB'
  },
  node: {
    module: importModule('Node'), displayName: 'Node'
  },
  npm: {
    module: importModule('NPM'), displayName: 'npm'
  },
  photoshop: {
    module: importModule('Photoshop'), displayName: 'Photoshop'
  },
  postgresql: {
    module: importModule('Postgresql'), displayName: 'Postgresql'
  },
  rails: {
    module: importModule('Rails'), displayName: 'Rails'
  },
  react: {
    module: importModule('React'), displayName: 'React'
  },
  redux: {
    module: importModule('Redux'), displayName: 'Redux'
  },
  reduxobservable: {
    module: importModule('ReduxObservable'), displayName: 'Redux Observable'
  },
  rxjs: {
    module: importModule('RxJS'), displayName: 'RxJS'
  },
  sass: {
    module: importModule('Sass'), displayName: 'Sass'
  },
  swift: {
    module: importModule('Swift'), displayName: 'Swift'
  },
  twitter: {
    module: importModule('Twitter'), displayName: 'Twitter'
  },
  ubuntu: {
    module: importModule('Ubuntu'), displayName: 'Ubuntu'
  },
  web: {
    module: importModule('Web'), displayName: 'Website'
  },
  webpack: {
    module: importModule('Webpack'), displayName: 'Webpack'
  },
  websocket: {
    module: importModule('WebSocket'), displayName: 'Web Sockets'
  },
  wordpress: {
    module: importModule('Wordpress'), displayName: 'Wordpress'
  },
}

export default icons