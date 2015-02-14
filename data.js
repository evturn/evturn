projects = [ 
	{
		name: 'Blog',
		summary: "I originally built this blog in Sinatra. I implemented user authentication using bcrypt's hash algorithm and used PostgreSQL to store encrypted passwords. Once a user creates an account they are granted access to tools that allow them to create new posts as well as edit or delete any of their published entries. I recently revisted this project and rebuilt it using Node on the server-side, Backbone for the client, and MongoDB for storage. Since I never used the original blog, I decided to write a task that uses the New York Times API to select sentences at random from various recent articles. These sentences are then combined to create new, nonsensical blog posts which are authored by a fictious nine year old user. In addition, anyone wanting to leave comments on these posts can do so by signing in with their Facebook account",
		stack: "Rebuilt with Node.js &#x95; Express.js &#x95; MongoDB &#x95; Backbone.js &#x95; Handlebars &#x95; Underscore.js &#x95; Javascript<br>(Originally Sinatra &#x95; Ruby &#x95; PostgreSQL)",
		lead: "assets/img/marshallz-1.png",
		gallery: 
			[
			'assets/img/marshallz-2.png', 
			'assets/img/marshallz-3.png', 
			'assets/img/marshallz-4.png'
			]
	},
	{
		name: 'BAC Calculator',
		summary: "Users select items from an inventory of alcoholic beverages and have access to a beer database. These selection(s) along with the user's information return a blood alcohol level, a description, and color scheme representing stages from low traces of alcohol to lethal doses",
		stack: "Rebuilt with Node.js &#x95; Express.js &#x95; Backbone.js &#x95; Underscore.js &#x95; Javascript<br>(Originally Rails &#x95; Backbone.js &#x95; Underscore.js &#x95; Ruby &#x95; Javascript)",
		lead: "assets/img/alculator-1.png",
		gallery: 
			[
			"assets/img/alculator-2.png",
			"assets/img/alculator-3.png"
			]
	},
	{
		name: 'Hangman',
		summary: "Hangman was original built in Sinatra using Ruby. The game state updated in real time and was stored using a PostgreSQL database. Months later I revisited the project for fun and remade the game from scratch in Javascript Backbone.js handling the views as the game is played",
		stack: "Rebuilt with Node.js &#x95; Express.js &#x95; Backbone.js &#x95; Underscore.js &#x95; Javascript<br>(Originally Sinatra &#x95; Ruby &#x95; PostgreSQL &#x95; AJAX)",
		lead: "assets/img/hangman-2.png",
		gallery: 
			[
			"assets/img/hangman-3.png",
			"assets/img/hangman-4.png",
			"assets/img/hangman-1.png"
			]
	}, 
	{
		name: 'Tic Tac Toe',
		summary: "This version of Tic Tac Toe was built using Backbone.js. I sparingly used jQuery for this project giving the entire workload of event handling to my Backbone Views. I designed images for each game piece with Adobe Photoshop. Each image's file path was stored as an attribute to a certain model within the application and then used to render bits and pieces of the game in the browser on initial page load and during gameplay",
		stack: "Built with Backbone.js &#x95; Underscore.js &#x95; Javascript",
		lead: 'assets/img/ttt.png',
		gallery: ['assets/img/ttt.png']
	},
	{
		name: 'To-Do List',
		summary: "This To-Do list requires no refreshing and saves instantly upon click or keydown. Data is stored locally on your machine with Backbone.localStorage", 
		stack: "Built with Backbone.js &#x95; Underscore.js &#x95; Backbone.localStorage &#x95; Javascript",
		lead: 'assets/img/ramen-buffet.png',
		gallery:['assets/img/ramen-buffet.png']
	}
];

contacts = [
	{
		name: 'email',
		url: 'mailto:evturn@gmail.com',
		image: 'assets/img/email.png',
	},
	{
		name: 'linkedin',
		url: 'http://www.linkedin.com/in/evturn/',
		image: 'assets/img/linkedin.png'
	},
	{
		name: 'github',
		url: 'http://github.com/evturn',
		image: 'assets/img/github.png'
	},
	{
		name: 'general assembly',
		url: 'https://profiles.generalassemb.ly/ev',
		image: 'assets/img/ga.png'
	}
];

siteCopy = [
	{paragraph: 'Although I initially built apps almost exclusively in a Rails environment, my attraction to the world of isomorphic JavaScript has heavily strengthened the application logic I write. Given my familiarity with the MVC architectural pattern Rails implements, I find employing libraries like Backbone.js on the client side a pertinent fit. As the web continues to evolve in the direction of single page applications, exploring solutions and strategies to building these rich front-end apps is not only essential but defines an exciting time for design.', id: 1},
	{fact: '<strike>Evan has built applications since the age of 3. He also invented the internet</strike><sup><a id="footnote" href="#">[1]</a></sup>', id: 2},
	{correction: 'Evan did not invent the internet', id: 3}
];