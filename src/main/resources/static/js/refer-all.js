$(function() {
	$('a').click(function(){
		var date = $(this).children().attr('value');
		document.getElementById('calendarDate').value=date;
		document.refer.submit();
		return false;
	});
});