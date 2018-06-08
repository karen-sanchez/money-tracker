$(document).ready(function() {

	// homepage get item prices, parse, add, and display
	let pricesArray = [];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	$('.parent-date .list-group-item').each(function() {			
		let findPrice = $(this).find('.product-price').text();
		pricesArray.push(findPrice)
	});

	let result = pricesArray.map(Number);
	let sum = result.reduce(reducer, 0);

	$('.categories-total').text('Total: $ ' + ' ' + sum);

	// create unique attr names for collapse table to work
	$('#accordion .card-header').each(function(i) {
		$(this).attr('id', 'heading' + i)
	});

	$('#accordion .btn-mint').each(function(i) {
		$(this).attr('data-target', '#collapse' + i);
		$(this).attr('aria-controls', 'collapse' + i);
	});

	$('#accordion .btn-link').each(function(i) {
		$(this).attr('data-target', '#collapse' + i);
		$(this).attr('aria-controls', 'collapse' + i);
	});

	$('#accordion .collapse').each(function(i) {
		$(this).attr('id', 'collapse' + i);
		$(this).attr('aria-labelledby', 'heading' + i);
	});

	// alternate between sign-in anf log-in forms
	$('.signup-form').hide();

	$('.link-to-signup').click(function(){
		$('.signup-form').show();
		$('.login-form').hide();
		$(this).parent().parent().parent().parent().find('.signup-form .link-to-signup').addClass('bg-mint-hover');
	});

	$('.link-to-login').click(function(){
		$('.signup-form').hide();
		$('.login-form').show();
	});


});

