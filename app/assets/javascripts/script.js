$(document).ready(function() {

	function getSum(total, num) {
	    return total + num;
	}
	// get item prices, parse, add, and display
	$('.parent-date').each(function() {		
		let pricesArray = [];
		let findPrice = $(this).find('.product-price').text();
		pricesArray.push(findPrice)
		let parseArray = pricesArray.join(' ').split(' ').map(parseFloat);
		let filterArray = parseArray.filter(Boolean);
		let total = filterArray.reduce(getSum, 0);
		$(this).find('.categories-total').text('Total: $ ' + ' ' + total);
	});

	// create unique attr names for collapse table to work
	$('#accordion .card-header').each(function(i) {
		$(this).attr('id', 'heading' + i)
	});

	$('#accordion .btn-mint').each(function(i) {
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

