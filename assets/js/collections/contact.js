var Contact = Backbone.Collection.extend({
	model: Link,
	el: '#links',
	template: _.template($('#contact-template').html()),
});

var links = [
	{
		name: 'email',
		url: 'mailto:evturn@gmail.com',
		icon: 'fa fa-envelope-o'
	},
	{
		name: 'github',
		url: 'http://github.com/evturn',
		icon: 'fa fa-github-square'
	},
	{
		name: 'linkedin',
		url: 'http://www.linkedin.com/in/evturn/',
		icon: 'fa fa-linkedin-square'
	},
	{
		name: 'general assembly',
		url: 'https://profiles.generalassemb.ly/ev',
		icon: 'fa fa-certificate'
	},
	{
		name: 'twitter',
		url: 'http://twitter.com/evturn',
		icon: 'fa fa-twitter'
	},
	{
		name: 'skype: @evturn',
		url: 'javaScript:void(0);',
		icon: 'fa fa-skype',
	}
];

var contact = new Contact(links);