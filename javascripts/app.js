
$(function() {
	var bio = new Bio();
	showBio();


	

	function showBio() {
		$('#bio').hide();
		$('#bio-tab').on('click', function() {
			$('#bio').toggle();
			});
	}


});


console.log('app');