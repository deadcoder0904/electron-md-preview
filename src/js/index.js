$(document).ready(function() {
	$('#output').html(marked($('textarea').val()));
	$('textarea').on('change keyup paste',function() {
		$('#output').html(marked($(this).val()));
	});
});