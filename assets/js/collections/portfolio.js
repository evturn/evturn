var Portfolio = Backbone.Collection.extend({
	model: Project,
});


var musicInsider =
	{
		name: 'Music Insider',
		description: "Music Insider is a Los Angeles based podcast in which this website hosts along with a blog.",
		id: 1,
		url: 'http://musicinsider.co',
		lead: "assets/img/mi-1.png",
		items: 
			[
				{item: 'assets/img/mi-2.png'}, 
				{item: 'assets/img/mi-3.png'}, 
				{item: 'assets/img/mi-4.png'},
				{item: 'assets/img/mi-5.png'}
			]
	};
var marshallz =
	{
		name: 'Marshallz Blog',
		description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
		id: 2,
		url: 'http://marshallz.com',
		lead: "assets/img/marshallz-1.png",
		items: 
			[
				{item: 'assets/img/marshallz-2.png'}, 
				{item: 'assets/img/marshallz-3.jpg'}, 
				{item: 'assets/img/marshallz-4.jpg'}
			]
	};
var piqueBeta =
	{
		name: 'Pique',
		description: "Pique is an app for people who are interested in networking, collaborating, and working on projects. I built the front end of this site which allows potential new users to sign up before the app is released. Views and route parameters are all handled by Backbone. Data from the input fields are saved using Firebase.",
		id: 3,
		url: 'http://piqueapp.github.io',
		lead: "assets/img/pique-1.jpg",
		items: 
			[
				{item: 'assets/img/pique-2.jpg'}, 
				{item: 'assets/img/pique-3.jpg'}, 
				{item: 'assets/img/pique-4.jpg'}
			]
	};
var alculator =
	{
		name: 'Alculator',
		description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
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
		name: 'Ramen Buffet',
		description: "Ramen Buffet manages a list of small tasks or todos. These tasks can be of any importance or priority. A clock is provided as timer which can be used to time breaks or time the user may want to set aside to dedicate to a particular task.",
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
		description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
		id: 6,
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
		description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
		id: 7,
		lead: 'assets/img/ttt-1.jpg',
		items: 
			[
				{item: 'assets/img/ttt-2.jpg'}
			]
	};
var drive =
	{
		name: 'Drive Publishing',
		description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
		id: 8,
		lead: 'assets/img/drive-1.png',
		items: 
			[
				{item: 'assets/img/drive-2.png'}
			]
	};

var featuredProjects = [
	musicInsider, 
	marshallz, 
	piqueBeta,
	drive, 
	alculator, 
	ramenBuffet, 
	hangman, 
	tictactoe
];

var portfolio  = new Portfolio(featuredProjects);
