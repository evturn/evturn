var Router = Backbone.Router.extend({
	routes: {
		'' 				: 'home',
		'about' 	: 'about',
		'contact' : 'contact'
	},
	home: function() {
		$('.about').hide();
		$('.contact').hide();
		var home = new Home();
		$('.home').show();
	},
	about: function() {
		$('.home').hide();
		$('.contact').hide();
		var about = new About();
		$('.about').show();
	},
	contact: function() {
		$('.home').hide();
		$('.about').hide();
		var contact = new Contact();
		$('.contact').show();
	},
});