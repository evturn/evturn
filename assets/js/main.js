new AppView();

projectsCollection = new ProjectsCollection(projects);

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});

newIds = [];
function createId(string) {
  counter = 1;
  for (counter + 1; counter <= 3; counter++) {
    elementId = string + '-' + counter;
    newIds.push(elementId);
  };
};


