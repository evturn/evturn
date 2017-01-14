import React from 'react'
import Helmet from 'react-helmet'

const Head = props => {
  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      defaultTitle='Evan Turner | Software Engineer'
      titleAttributes={{itemprop: 'name', lang: 'en'}}
      title='Software Engineer'
      titleTemplate='Evan Turner | %s'
      meta={[
        {property: 'og:description',  content: 'Software Engineer based in New York City developing apps for web, mobile, and emerging technologies'},
        {property: 'og:title',        content: 'Evan Turner | Software Engineer'},
        {property: 'og:site_name',    content: 'Evan Turner'},
        {property: 'og:url',          content: 'https://evturn.com/#/'},
        {property: 'og:image',        content: require('public/favicon.png')},
        {property: 'og:image:alt',    content: 'An elegant stencil in black and white of a guy with a beard and shades'},
        {property: 'og:type',         content: 'website'},
        {property: 'og:locale',       content: 'en_US'},
        {name: 'twitter:card',        content: 'summary'},
        {name: 'twitter:title',       content: 'Evan Turner | Software Engineer'},
        {name: 'twitter:image',       content: require('public/favicon.png')},
        {name: 'twitter:image:src',   content: require('public/favicon.png')},
        {name: 'twitter:image:alt',   content: 'An elegant stencil in black and white of a guy with a beard and shades'},
        {name: 'twitter:site',        content: '@evturn'},
        {name: 'twitter:url',         content: 'https://evturn.com/#/'},
        {name: 'twitter:description', content: 'Software Engineer based in New York City developing apps for web, mobile, and emerging technologies'},
        {name: 'keywords',            content: 'evan turner, web apps, developer, software, javascript, mobile, technologies'},
        {name: 'description',         content: 'Software Engineer based in New York City developing apps for web, mobile, and emerging technologies'},
        {name: 'theme-color',         content: '#00d2ff'},
      ]}
      link={[
        {rel: 'canonical',                          href: 'https://evturn.com/#/'},
        {rel: 'apple-touch-icon',                   href: require('public/apple-touch-icon.png')},
        {rel: 'apple-touch-icon', sizes: '57x57',   href: require('public/apple-touch-icon-57x57.png')},
        {rel: 'apple-touch-icon', sizes: '60x60',   href: require('public/apple-touch-icon-60x60.png')},
        {rel: 'apple-touch-icon', sizes: '72x72',   href: require('public/apple-touch-icon-72x72.png')},
        {rel: 'apple-touch-icon', sizes: '76x7',    href: require('public/apple-touch-icon-76x76.png')},
        {rel: 'apple-touch-icon', sizes: '114x114', href: require('public/apple-touch-icon-114x114.png')},
        {rel: 'apple-touch-icon', sizes: '120x120', href: require('public/apple-touch-icon-120x120.png')},
        {rel: 'apple-touch-icon', sizes: '144x144', href: require('public/apple-touch-icon-144x144.png')},
        {rel: 'apple-touch-icon', sizes: '152x152', href: require('public/apple-touch-icon-152x152.png')},
        {rel: 'icon',             sizes: '32x32',   href: require('public/favicon-32x32.png')},
        {rel: 'icon',             sizes: '96x96',   href: require('public/favicon-96x96.png')},
        {rel: 'shortcut icon', type: 'image/x-icon',href: require('public/favicon.ico')},
      ]} />
  )
}

export default Head