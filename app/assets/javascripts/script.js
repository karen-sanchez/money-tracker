$(document).ready(function() {

	$('.iamparent').each(function() {
		let pp = $(this).find('.product-price').text();
		let someArray = [];
		
		someArray.push(pp)

		// parse this crap

		var total = 0;
		for (var i = 0; i < someArray.length; i++) {
			total += someArray[i] << 0;
		}
		console.log(someArray, total)
  	});

});