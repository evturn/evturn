var Router = Backbone.Router.extend({
	routes: {
		'' 				: 'home',
		'about' 	: 'about',
		'contact' : 'contact',
		'work'		: 'work'
	},
	home: function() {
		$('.about').hide();
		$('.contact').hide();
		$('.work').hide();
		var home = new Home({collection: portfolio});
		$('.home').show();
	},
	about: function() {
		$('.home').hide();
		$('.contact').hide();
		$('.work').hide();
		var about = new About();
		$('.about').show();
	},
	contact: function() {
		$('.home').hide();
		$('.about').hide();
		$('.work').hide();
		var contact = new Contact();
		$('.contact').show();
	},
	work: function() {
		$('.home').hide();
		$('.about').hide();
		$('.contact').hide();
		var work = new Work({collection: portfolio});
		$('.work').show();
	}
});