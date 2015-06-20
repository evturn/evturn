var Router = Backbone.Router.extend({
	wrapper: null,
	home: null,
	routes: {
		'' 				: 'index',
		'about' 	: 'about',
		'contact' : 'contact',
		'work'		: 'work'
	},
	initialize: function() {
		this.wrapper = new Main();
	},
	index: function() {
		if (this.home == null) {
			this.home = new Home({collection: projects});
		}
		this.wrapper.child = this.home;
		this.wrapper.render();
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
		var work = new Work({collection: projects});
		$('.work').show();
	}
});