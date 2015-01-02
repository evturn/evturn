var Router = Backbone.Router.extend({
  routes:{
    '': '',
    'bio': 'showBio'
  },
});

router = new Router();
Backbone.history.start();

console.log('Router');