$(document).ready(function() {
	$.ajax({
		url: 'news.php',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			var newsHTML = '';
			for(var i = 0; i < data.length; i++) {
				newsHTML += '<h2>' + data[i].title + '</h2>';
				newsHTML += '<p>' + data[i].content + '</p>';
				newsHTML += '<p class="date">' + data[i].date + '</p>';
			}
			$('#news').html(newsHTML);
		},
		error: function() {
			alert('Error loading news.');
		}
	});
});


