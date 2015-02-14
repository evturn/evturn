new AppView();

projectsCollection = new ProjectsCollection(projects);

total = projectsCollection.length

buttons = [];

function createId(string) {
  counter = 1;
  for (counter + 1; counter <= total; counter++) {
    var projectButton = new ProjectButton;
    buttonId = string + '-' + counter;
    projectNumber = counter;
    projectButton.set({number: projectNumber, id: buttonId});
    buttons.push(projectButton);
  };
};

$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});



