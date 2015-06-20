var Technologies = Backbone.Collection.extend({
	model: Technology,
});

var myStack = new Technologies([
	node,
	backbone,
	sass,
	bootstrap,
	git,
	photoshop,
	mongodb,
	digitalOcean,
	express
]);

