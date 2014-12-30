(function (){
	width();

	$(window).on('resize', function(){
		width();
	});

	function width(){
		var	width = $(document).width();

		$('#width').text(width);
	}
})();

