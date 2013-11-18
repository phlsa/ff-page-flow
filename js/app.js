$( document ).ready( function() {

	$( '.page1' ).click(function() {
		$('.page1').addClass('half-out-left');
		$('.page2').addClass('half-in-right');
		_.delay(function() {
			$('.page1').removeClass('half-out-left').addClass('out-left');
			$('.page2').removeClass('half-in-right out-right');
		}, 3000);
	});

	$( '.back' ).click(function() {
		$('.page1').removeClass('out-left');
		$('.page2').addClass('out-right');
	});

});