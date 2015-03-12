var Router = Backbone.Router.extend({
	routes: {
		'' : 'egg'
	},
	initialize: function() {
		new AppView();
		this.egg();
	},
	egg: function() {

		$(function() {
			$('#tooltip').tooltip()

			$(window).load(function() {
				$("#preloader").delay(500).fadeOut();
	  		$(".preloader").delay(600).fadeOut("slow");
			});

			$(window).scroll(function(){
	  		if ($(this).scrollTop() > 1) {
	  			$('.dmtop').css({bottom:"25px"});
				} else {
	    		$('.dmtop').css({bottom:"-100px"});
	  		}
			});

			$('.dmtop').click(function(){
	  		$('html, body').animate({scrollTop: '0px'}, 800);
	  		return false;
			});

		});

	},
});

router = new Router();