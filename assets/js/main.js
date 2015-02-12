marshallzSummary = {
	summary: "I originally built this blog in Sinatra. I implemented user authentication using bcrypt's hash algorithm and used PostgreSQL to store encrypted passwords. Once a user creates an account they are granted access to tools that allow them to create new posts as well as edit or delete any of their published entries. I recently revisted this project and rebuilt it using Node on the server-side, Backbone for the client, and MongoDB for storage. Since I never used the original blog, I decided to write a task that uses the New York Times API to select sentences at random from various recent articles. These sentences are then combined to create new, nonsensical blog posts which are authored by a fictious nine year old user. In addition, anyone wanting to leave comments on these posts can do so by signing in with their Facebook account"}

alculatorSummary = {summary: "Users select items from an inventory of alcoholic beverages and have access to a beer database. These selection(s) along with the user's information return a blood alcohol level, a description, and color scheme representing stages from low traces of alcohol to lethal doses"}


new AppView();



	
$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});
