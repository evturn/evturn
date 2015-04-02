var Contact = Backbone.Collection.extend({
	model: Link,
	el: '#contact',
	template: _.template($('#contact-template').html()),
});

var links = [
	{
		name: 'email',
		url: 'mailto:evturn@gmail.com',
		image: 'assets/img/email.jpg',
		icon: 'fa fa-paper-plane'
	},
	{
		name: 'github',
		url: 'http://github.com/evturn',
		image: 'assets/img/github.jpg',
		icon: 'fa fa-github'
	},
	{
		name: 'ga',
		url: 'https://profiles.generalassemb.ly/ev',
		image: 'assets/img/ga.jpg',
		icon: 'fa fa-certificate'
	},
	{
		name: 'linkedin',
		url: 'http://www.linkedin.com/in/evturn/',
		image: 'assets/img/linkedin.jpg',
		icon: 'fa fa-linkedin-square'
	}
];

var contact = new Contact(links);