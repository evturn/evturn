new AppView();

projectsCollection = new ProjectsCollection(projects);

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});

elementIds = [];
function createId(string) {
	elementIds = [];
	total = projectsCollection.length
  counter = 1;
  for (counter + 1; counter <= total; counter++) {
    elementId = string + '-' + counter;
    elementIds.push(elementId);
  };
};


