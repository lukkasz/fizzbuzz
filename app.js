$(document).ready(function(){

	$('.btn').on('click', function(){

		var number = $('#number').val();
		
		
		var fizzBuzz = function ( num ) {
			var rez = $('.result');
			rez.empty();
			for (var i = 1; i <= num; i++) {
				if ( ( i%3 == 0 ) && ( i%5 == 0 ) ) {
					rez.append("<span>FizzBuzz, </span>");
				} else if (i%3 == 0) {
					rez.append("<span>Fizz, </span>");
				} else if (i%5 == 0) {
					rez.append("<span>Buzz, </span>");
				} else {
					rez.append("<span>" + i + ", </span>")
				}
			}
			return rez;
		};

		fizzBuzz(number);
		
		
	});
	

	

});