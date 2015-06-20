var Router = Backbone.Router.extend({
	wrapper: null,
	homeView: null,
	aboutView: null,
	contactView: null,
	workView: null,
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
		if (this.homeView === null) {
			this.homeView = new Home({collection: projects});
		}
		this.wrapper.child = this.homeView;
		this.wrapper.render();
	},
	about: function() {
		if (this.aboutView === null) {
			this.aboutView = new Contact({collection: contactLinks});
		}
		this.wrapper.child = this.aboutView;
		this.wrapper.render();
	},
	contact: function() {
		if (this.contactView === null) {
			this.contactView = new Contact({collection: contactLinks});
		}
		this.wrapper.child = this.contactView;
		this.wrapper.render();
	},
	work: function() {
		if (this.workView === null) {
			this.workView = new Work({collection: projects});
		}
		this.wrapper.child = this.workView;
		this.wrapper.render();
	}
});