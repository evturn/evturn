var Portfolio = Backbone.Collection.extend({
	model: Project,
});

var piqueBeta =
	{
		name: 'Pique Beta',
		description: "Pique is an app for people who are interested in networking, collaborating, and working on projects. I built the front end of this site which allows potential new users to sign up before the app is released. Views and route parameters are all handled by Backbone. Data from the input fields are saved using Firebase.",
		stack: 
			[
				backbone,
				firebase,
				photoshop,
				jQuery,
				underscore
			],
		id: 1,
		url: 'http://piqueapp.github.io',
		lead: "assets/img/pique-1.jpg",
		items: 
			[
				{item: 'assets/img/pique-2.jpg'}, 
				{item: 'assets/img/pique-3.jpg'}, 
				{item: 'assets/img/pique-4.jpg'}
			]
	};
var musicInsider =
	{
		name: 'Music Insider',
		description: "Music Insider is a Los Angeles based podcast. Using Backbone.js I designed an Admin interface that uses Firebase for User Authentication and real time cloud storage. Clients that are authenticated are given access to admin tools to where the user can add and update posts.",
		stack: 
			[
				backbone, 
				node,
				express,
				photoshop,
				jQuery,
				underscore,
				firebase
			],
		id: 2,
		url: 'http://musicinsider.co',
		lead: "assets/img/mi-1.jpg",
		items: 
			[
				{item: 'assets/img/mi-2.jpg'}, 
				{item: 'assets/img/mi-3.jpg'}, 
				{item: 'assets/img/mi-4.jpg'},
				{item: 'assets/img/mi-5.jpg'}
			]
	};
var marshallz =
	{
		name: 'Marshallz Blog',
		description: "All blog posts are created using the New York Times API to select sentences at random from various articles. These sentences are then combined to create new, nonsensical blog posts which are authored by a fictious nine year old user. In addition, these posts allow comments from other users by signing in with their Facebook or Twitter account",
		stack:
			[
			backbone,
			node,
			express,
			mongoDB,
			jQuery,
			underscore
			],
		id: 3,
		url: 'http://marshallz.com',
		lead: "assets/img/marshallz-1.jpg",
		items: 
			[
				{item: 'assets/img/marshallz-2.jpg'}, 
				{item: 'assets/img/marshallz-3.jpg'}, 
				{item: 'assets/img/marshallz-4.jpg'}
			]
	};
var alculator =
	{
		name: 'Alculator',
		description: "Users select from an investory of alcoholic beverages. In addition, users have search access to a database of beer. All alcohol percentages for the user's selected beverages gathered. That data, along with the user's information, is run through the Widmark formula to calculate the individual's blood alcohol level. The results provide a description particular to the user's intoxication level ranging from low traces of alcohol to lethal doses.",
		stack:
			[
				backbone,
				node,
				express,
				photoshop,
				jQuery,
				underscore
			],
		id: 4,
		url: 'http://alculator.co',
		lead: "assets/img/alculator-3.png",
		items: 
			[
				{item: "assets/img/alculator-2.png"},
				{item: "assets/img/alculator-1.png"},
				{item: "assets/img/alculator-4.png"}
			]
	};
var ramenBuffet =
	{
		name: 'Task Manager | Ramen Buffet',
		description: "This single page AngularJS app  stores the data from the user input using MongoDB. Users can create an account for the app and in addition login and link their Twitter and Facebook accounts. I have built this app multiple times since the concept provides a great avenue to exploring other technologies. Other iterations of this app used Backbone.js, Marionette.js, and Firebase.", 
		stack: 
			[
				angular,
				node,
				express,
				mongoDB,
				jQuery,
				underscore
			],
		id: 5,
		url: 'http://ramenbuffet.com',
		lead: 'assets/img/ramen-1.jpg',
		items:
			[
				{item: "assets/img/ramen-3.jpg"},
				{item: "assets/img/ramen-2.jpg"}
			]
	};
var hangman =
	{
		name: 'Hangman',
		description: "Hangman was original built in Sinatra using Ruby. The game state updated in real time and was stored using a PostgreSQL database. Months later I remade the game from with Backbone.js",
		stack:
			[
				backbone,
				node,
				express,
				photoshop,
				jQuery,
				underscore
			],
		id: 6,
		url: "http://hangman-node.herokuapp.com",
		lead: "assets/img/hangman-1.jpg",
		items: 
			[
				{item: "assets/img/hangman-2.jpg"},
				{item: "assets/img/hangman-3.jpg"},
				{item: "assets/img/hangman-4.jpg"}
			]
	};
var tictactoe =
	{
		name: 'Tic Tac Toe',
		description: "This version of Tic Tac Toe was built using Backbone.js. I sparingly used jQuery for this project giving the entire workload of event handling to my Backbone Views. I designed images for each game piece with Adobe Photoshop. Each image's file path was stored as an attribute to a certain model within the application and then used to render bits and pieces of the game in the browser on initial page load and during gameplay",
		stack:
			[
				backbone,
				jQuery,
				underscore
			],
		id: 7,
		lead: 'assets/img/ttt-1.jpg',
		items: 
			[
				{item: 'assets/img/ttt-2.jpg'}
			]
	};

var portfolio  = new Portfolio([
		piqueBeta, 
		musicInsider, 
		marshallz, 
		alculator, 
		ramenBuffet, 
		hangman, 
		tictactoe
]);