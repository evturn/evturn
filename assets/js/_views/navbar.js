var Navbar = Backbone.View.extend({
	el: '.site-navigation',
	events: {
		'click .nav-home'  	 : 'home',
		'click .nav-about' 	 : 'about',
		'click .nav-contact' : 'contact',
		'click .nav-work' 	 : 'work',
		'click .collapse'		 : 'collapse'
	},
	home: function() {
		router.navigate('', {trigger: true});
	},
	about: function() {
		router.navigate('about', {trigger: true});
	},
	contact: function() {
		router.navigate('contact', {trigger: true});
	},
	work: function() {
		router.navigate('work', {trigger: true});
	},
	collapse: function() {
		$('.collapse').hide();
	},
});