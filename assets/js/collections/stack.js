var Stack = Backbone.Collection.extend({
	model: Software,	
});

var myStack = new Stack([
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