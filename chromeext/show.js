$(document).ready(function() {



	// if (data === undefined){
	// 	$(body).append("<h1> No settings yet..</h1>");	
	// }



	for (var key in localStorage) {
		console.log(key);
		console.log(localStorage[key]);

		var keys = localStorage[key].split(",");

		$("#list").append("<h3> When I visit " + key + ":</h3>");
		for (i=0; i<keys.length; i+=3) {
			$("#list").append("Text <strong>" + keys[i]   + "</strong>");
			$("#list").append(' the message <strong>"'    + keys[i+2] + '"</strong>');
			$("#list").append(' at <strong>' + keys[i+1] + '.</strong><br>');
		}
		$("#list").append("<br><button class='del btn btn-danger' id=" + key + ">delete</button>");
		$("#list").append("<hr>");

	}

		$(".del").bind('click', function(){
			id = this.id;
			localStorage.removeItem(id);
			location.reload();	
		});

});
