$(document).ready(function() {

//alert('asdf');

    $('.block').click(function() {
        $('.block').hide('slow', function() {
		alert("block has dissappeared!");
	});
    });


});
