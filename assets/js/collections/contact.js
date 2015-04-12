var Contact = Backbone.Collection.extend({
	model: Link,
	el: '#links',
	template: _.template($('#contact-template').html()),
});

var links = [
	{
		name: 'email',
		url: 'mailto:evturn@gmail.com',
		icon: 'fa fa-paper-plane'
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
		name: 'codepen.io',
		url: 'http://codepen.io/Ev/',
		icon: 'fa fa-codepen'
	},
	{
		name: 'skype: @evturn',
		url: '#',
		icon: 'fa fa-skype',
	}
];

var contact = new Contact(links);