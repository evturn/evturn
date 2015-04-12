var About = Backbone.Model.extend({});

var bio = {
	lead: 'Hi, I\'m Evan. I am web developer who lives in Brooklyn. I drink an unhealthy amount of coffee and write a lot of JavaScript.',
	paragraph1: 'When I\'m not building web apps and writing JavaScript, you can find me drinking an unhealthy amount of coffee and writing a lot HTML (wrapped in script tags, designed to be appended to a web document somewhere which will eventually be rendered by the JavaScript I wrote).',
	paragraph2: 'I am also a proud alum of General Assembly\'s Web Development Immersive program. I find the rapid evolution of technology fascinating. As the web continues in the direction of single page application, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation.'
	};

var about	= new About(bio);