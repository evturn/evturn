var About = Backbone.Model.extend({});

var bio = {
	lead: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation.',
	paragraph1: 'As a JavaScript Developer, I focus on building responsive single page applications that optimize scalability through RESTful APIs. I initially built apps almost exclusively in a Rails environment writing Ruby, but my attraction to the JavaScript language and the seemingly endless amount of libraries has heavily strengthened the application logic I write.',
	paragraph2: 'Given my familiarity with the Model–view–controller (MVC) architectural pattern that Rails implements, I find employing JavaScript libraries like Backbone.js and AngularJS a pertinent fit on the frontend.'
	};

var about	= new About(bio);