new AppView();

projectsCollection = new ProjectsCollection(projects);

projectModels = projectsCollection.models;

galleryTest = projectModels[0];
galleryObjectOfImageObjects = galleryTest.get('gallery');
firstImageObjectInGalleryObject = _.values(galleryObjectOfImageObjects[0]);
urlString = firstImageObjectInGalleryObject[0];
activeString = firstImageObjectInGalleryObject[1];


$projectEl = $('#project-summary');

portfolioView  = new PortfolioView();
$('#portfolio').hide();
$('.footnote').hide();

$('.carousel').carousel({
	interval: 2000
});





