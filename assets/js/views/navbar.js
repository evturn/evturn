var Navbar = Backbone.View.extend({
	el: '.site-navigation',
	events: {
		'click .nav-home'  : 'home',
		'click .nav-about' : 'about'
	},
	home: function() {
		router.navigate('', {trigger: true});
	},
	about: function() {
		router.navigate('about', {trigger: true});
	},
});