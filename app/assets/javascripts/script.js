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
		let total = filterArray.reduce(getSum);
		$(this).find('.categories-total').text('Total: $ ' + ' ' + total);
	});
	// create unique attr names for collapse table to work
	$('.card-header').each(function(i) {
		$(this).attr('id', 'heading' + i)
	});

	$('.collapse').each(function(i) {
		$(this).attr('aria-labelledby', 'heading' + i)
	});

	$('.btn-link').each(function(i) {
		$(this).attr('data-target', '#collapse' + i)
	});

	$('.btn-link').each(function(i) {
		$(this).attr('aria-controls', 'collapse' + i)
	});

	$('.collapse').each(function(i) {
		$(this).attr('id', 'collapse' + i)
	});

	$('#accordion').on('show hide', function() {
	    $(this).css('height', 'auto');
	});
	// fixes accordion not closing last card
	$('[id^=collapse]').each(function() {
		$(this).parent().find('.btn-link').click(function() {
	  		$(this).parent().parent().next().toggleClass('show');
		});
	});

});