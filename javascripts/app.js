	var bio = new Bio();
	var contact = new Contact();

$(function() {
	showBio();
	showContact();


	

	function showBio() {
		$('#bio').hide();
		$('#bio-tab').on('click', function() {
			$('#bio').toggle();
			});
	}

	function showContact() {
		$('#contact').hide();
		$('#contact-tab').on('click', function() {
			console.log('YIKES')
			$('#contact').toggle();
			});
	}


});


console.log('app');