projects = [ 
	{
		name: 'Music Insider',
		summary: "Music Insider is a Los Angeles based podcast. Using Backbone.js I designed an Admin interface that uses Firebase for User Authentication and real time cloud storage. Clients that are authenticated are given access to admin tools to where the user can add and update posts.",
		stack: "Node.js &#x95; Express.js &#x95; Firebase &#x95; Backbone.js &#x95; Underscore.js",
		id: 1,
		lead: "assets/img/mi-1.jpg",
		gallery: 
			[
			'assets/img/mi-2.jpg', 
			'assets/img/mi-3.jpg', 
			'assets/img/mi-4.jpg',
			'assets/img/mi-5.jpg'
			],
		icon: 'fa fa-microphone'
	},
	{
		name: 'Blog',
		summary: "I originally built this blog in Sinatra. I implemented user authentication using bcrypt's hash algorithm and used PostgreSQL to store encrypted passwords. Once a user creates an account they are granted access to tools that allow them to create new posts as well as edit or delete any of their published entries. I revisted this project and rebuilt it using Node.js on the server-side, Backbone.js for the client, and MongoDB for storage. Since I never used the original blog, I decided to write a task that uses the New York Times API to select sentences at random from various recent articles. These sentences are then combined to create new, nonsensical blog posts which are authored by a fictious nine year old user. In addition, anyone wanting to leave comments on these posts can do so by signing in with their Facebook account",
		stack: "Built with Node.js &#x95; Express.js &#x95; MongoDB &#x95; Backbone.js &#x95; Handlebars &#x95; Underscore.js &#x95; Javascript<br>(Originally Sinatra &#x95; Ruby &#x95; PostgreSQL)",
		id: 2,
		lead: "assets/img/marshallz-1.jpg",
		gallery: 
			[
			'assets/img/marshallz-2.jpg', 
			'assets/img/marshallz-3.jpg', 
			'assets/img/marshallz-4.jpg'
			],
		icon: 'fa fa-quote-left'
	},
	{
		name: 'BAC Calculator',
		summary: "Users select items from an inventory of alcoholic beverages and have access to a beer database. These selection(s) along with the user's information return a blood alcohol level, a description, and color scheme representing stages from low traces of alcohol to lethal doses",
		stack: "Built with Node.js &#x95; Express.js &#x95; Backbone.js &#x95; Underscore.js &#x95; Javascript<br>(Originally Rails &#x95; Backbone.js &#x95; Underscore.js &#x95; Ruby &#x95; Javascript)",
		id: 3,
		lead: "assets/img/alculator-1.jpg",
		gallery: 
			[
			"assets/img/alculator-2.jpg"
			],
		icon: 'fa fa-flask'
	},
	{
		name: 'To-Do List',
		summary: "This single page Node.js and AngularJS app is a To-Do list which requires no refreshing and stores the data from the user input using MongoDB (NoSQL) upon click or keydown. Users can create an account for the app and in addition login and link their Twitter and Facebook accounts. The original version of this web app was built using the Backbone.js library and stored data locally in the browser with Backbone.localStorage", 
		stack: "Built with Node.js &#x95; Express.js &#x95; MongoDB &#x95; Angular.js<br>(Originally Backbone.js &#x95; Underscore.js &#x95; Backbone.localStorage)",
		id: 4,
		lead: 'assets/img/ramen-1.jpg',
		gallery:
			[
			"assets/img/ramen-3.jpg",
			"assets/img/ramen-2.jpg"
			],
		icon: 'fa fa-list-alt'
	},
	{
		name: 'Hangman',
		summary: "Hangman was original built in Sinatra using Ruby. The game state updated in real time and was stored using a PostgreSQL database. Months later I revisited the project for fun and remade the game from scratch in Javascript Backbone.js handling the views as the game is played",
		stack: "Built with Node.js &#x95; Express.js &#x95; Backbone.js &#x95; Underscore.js &#x95; Javascript<br>(Originally Sinatra &#x95; Ruby &#x95; PostgreSQL &#x95; AJAX)",
		id: 5,
		lead: "assets/img/hangman-2.jpg",
		gallery: 
			[
			"assets/img/hangman-3.jpg",
			"assets/img/hangman-4.jpg",
			"assets/img/hangman-1.jpg"
			],
		icon: 'fa fa-male'
	}, 
	{
		name: 'Tic Tac Toe',
		summary: "This version of Tic Tac Toe was built using Backbone.js. I sparingly used jQuery for this project giving the entire workload of event handling to my Backbone Views. I designed images for each game piece with Adobe Photoshop. Each image's file path was stored as an attribute to a certain model within the application and then used to render bits and pieces of the game in the browser on initial page load and during gameplay",
		stack: "Built with Backbone.js &#x95; Underscore.js &#x95; Javascript",
		id: 6,
		lead: 'assets/img/ttt-1.jpg',
		gallery: ['assets/img/ttt-2.jpg'],
		icon: 'fa fa-times-circle'
	}

];

links = [
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

copy = {
	lead: 'As the web continues to evolve in the direction of single page applications, exploring solutions and strategies for building these rich front-end apps is not only essential but provides an exciting opportunity for design innovation.',
	paragraph1: 'As a JavaScript Developer, I focus on building responsive single page applications that optimize scalability through RESTful backends. Although I initially built apps almost exclusively in a Rails environment with Ruby, my attraction to the world of isomorphic JavaScript has heavily strengthened the application logic I write.',
	paragraph2: 'Given my familiarity with the Model–view–controller (MVC) architectural pattern that Rails implements, I find employing JavaScript libraries like Backbone.js or AngularJS a pertinent fit on the frontend.',
	fact: '<strike>Evan has built applications since the age of 3. He also invented the internet</strike><sup><a id="footnote" href="#">[1]</a></sup>',
	footnote: '<em>Evan did not invent the internet</em><sup> 1</sub>',
	correction: 'Evan did not invent the internet'
	};

technologies = [
	{
		image: 'assets/img/js-stack-white.png',
		technology: 
			[
			'MongoDB',
			'AngularJS',
			'Express.js',
			'Node.js'
			]
	},
	{
		image: 'assets/img/rails-stack-white.png',
		technology: 
			[
			'Sinatra',
			'PostgreSQL', 
			'Backbone.js',
			'Rails'
			]
	},
	{
		image: 'assets/img/grid-stack-white.png',
		technology: 
			[
			'Heroku',
			'Digital Ocean',
			'Git',
			'Firebase'
			]
	},
	{
		image: 'assets/img/gear-stack-white.png',
		technology: 
			[
			'Handlebars',
			'Bootstrap',
			'Underscore.js',
			'jQuery'
			]
	}
];

myWork = {
	main: "assets/img/portfolio-2.png",
	thumbnail:
	[
	"assets/img/marshallz-1.png",
	"assets/img/alculator-1.png",
	"assets/img/hangman-1.png",
	"assets/img/ttt.png"
	]
};