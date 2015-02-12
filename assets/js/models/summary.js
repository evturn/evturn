var Summary = Backbone.Model.extend({
	defaults: {
		summary: '',
		stack: '',
		image: '',
		carousel: {
			image1: '',
			image2: '',
			image3: '',
			image4: ''
		}
	}
});