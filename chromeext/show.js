$(document).ready(function() {



	// if (data === undefined){
	// 	$(body).append("<h1> No settings yet..</h1>");	
	// }



	for (var key in localStorage) {
		console.log(key);
		console.log(localStorage[key]);

		$("#list").append("<div>");
		$("#list").append(key);
		$("#list").append("<br>");
		$("#list").append(localStorage[key]);
		$("#list").append("<button class='del' id=" + key + "> Delete this </button>");
		$("#list").append("<hr>");
		$("#list").append("</div>");

	}



		$(".del").bind('click', function(){
			id = this.id;
			localStorage.removeItem(id);
			location.reload();	
		});

});