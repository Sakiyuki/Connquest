$(document).ready(function(){

	// Moblie menu toggle
	$('.menubutton').click(function(e){
		$('.mainNav').slideToggle();
		e.preventDefault();
	});

	// Show homepage beer bottles
	$('.featuredBeer .imgLink').click(function(e){
		$('.bottle').hide();
		$('.desc').hide();
		$(this).parent().find('.bottle').show();
		$(this).parent().find('.desc').show();
		e.preventDefault();
	})

});