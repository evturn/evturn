export default [
  {
    name: 'Sentence Generator',
    description: `I built a web application that generates its own original content every few minutes with virtually no involvement from a human being. The specific part of the program that consistently produces new content was a Markov-chain inspired sentence generator. After a year of only existing as a part of a larger app, I published the sentence generator portion as a installable package for other Node developers.`,
    id: 1,
    slug: 'sentence-generator',
    links: [
      {
        url: 'https://github.com/evturn/sentence-generator',
        icon: 'fa fa-github'
      },{
        url: 'https://www.npmjs.com/package/sentence-generator',
        icon: 'fa fa-code-fork'
      }
    ]
  },{
    name: 'Proto',
    description: `I wrote a very small library which allows JavaScript developers to easily inherit and copy properties from one object to another. This bit of software uses "Prototypes as classes", an idea inspired by author and developer Dr. Axel Rauschmayer, with the approach that JavaScript prototypes served as better classes than constructor functions.`,
    id: 2,
    slug: 'proto',
    links: [
      {
        url: 'https://github.com/evturn/proto',
        icon: 'fa fa-github'
      }, {
        url: 'https://www.npmjs.com/package/@evturn/proto',
        icon: 'fa fa-code-fork'
      }
    ]
  },{
    name: 'Slackbots',
    description: `This package allows for developers to easily create customized instances of new Bots on Slack. This API uses Web Sockets and the native Node Event Emitter to send messages in real time. Once configured all chatroom activity can be used to trigger your bot's behavior.`,
    id: 3,
    slug: 'slackbots',
    links: [
      {
        url: 'https://github.com/faquet/bots',
        icon: 'fa fa-github'
      }
    ]
  },{
    name: 'Babel Preset',
    description: `I published a preset of plugins that I commonly use to compile new and experimental features of the JavaScript specification into code that is backwards compatible for most JavaScript engines.`,
    id: 4,
    slug: 'sentence-generator',
    links: [
      {
        url: 'https://github.com/evturn/babel-preset-evturn',
        icon: 'fa fa-github'
      },{
        url: 'https://www.npmjs.com/package/babel-preset-evturn',
        icon: 'fa fa-code-fork'
      }
    ]
  }
];