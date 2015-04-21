var About = Backbone.View.extend({
	el: '.about',
	aboutTemplate: _.template($('#about-template').html()),
	aboutStackTemplate: _.template($('#about-stack-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.aboutTemplate());
		for (var i = myStack.length - 1; i >= 0; i--) {
			$('.about-stack').append(this.aboutStackTemplate(myStack.models[i].toJSON()));
		};
		return this;
	},
});