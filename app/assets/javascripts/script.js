$(document).ready(function() {

	function getSum(total, num) {
	    return total + num;
	}

	$('.parent-date').each(function() {		
		let pricesArray = [];
		let findPrice = $(this).find('.product-price').text();
		pricesArray.push(findPrice)
		let parseArray = pricesArray.join(' ').split(' ').map(parseFloat);
		let filterArray = parseArray.filter(Boolean);
		let total = filterArray.reduce(getSum);
		$(this).find('.categories-total').text('GRAND TOTAL: $ ' + ' ' + total);
	});

});