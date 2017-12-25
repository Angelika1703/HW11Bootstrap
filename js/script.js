$(document).ready(function(){
	$('.overlay').on('click', function(e){
		e.preventDefault();
		$('#modal1').hide();
	}).find('.content').click(function(e){
		e.stopPropagation();
	});
});
