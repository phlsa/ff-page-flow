var transitionType = 'type-1';

$( document ).ready( function() {

	$( '.page1' ).click(function() {
		$('.page1').addClass('half-out-left');
		$('.page2').addClass('half-in-right');
		$('.small-spinner').show();

		if ( transitionType === 'type-4' ) {
			_.delay(function() {
				$('.page1').removeClass('half-out-left').addClass('out-left');
				_.delay(function() {
					$('.page2').removeClass('half-in-right out-right');
					$('.page2').css({'height': '100px'});
					_.delay(function() {
						$('.page2').css({'height': '400px'});
						_.delay(function() {
							$('.page2').css({'height': '616px'});
							$('.small-spinner').hide();
						}, 500);
					}, 500);
				}, 1000);
			}, 1000);
		} else {
			_.delay(function() {
				$('.page1').removeClass('half-out-left').addClass('out-left');
				$('.page2').removeClass('half-in-right out-right');
				$('.small-spinner').hide();
			}, 3000);
		}
	});

	$( '.back' ).click(function() {
		$('.page1').removeClass('out-left');
		$('.page2').addClass('out-right');
	});





	$('li').click(function( e ) {
		$('.browser-window').removeClass(transitionType);

		$('li').removeClass('selected');
		$(e.currentTarget).addClass('selected');
		transitionType = $(e.currentTarget).attr('id');

		$('.browser-window').addClass(transitionType);
	});

});