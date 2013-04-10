$(document).ready(function() {

	if (!localStorage['id']) {
		var id = (Math.random() * 100000000000000000).toString();
		localStorage['id'] = id;
	}

	// var actions = [
	// 	{site : "reddit.com", time : "5", actions : {
	// 		text : [{name : "Dan K", number : 9739450937},
	// 				{name : "Abe K", number : 1083939432}
	// 		],
	// 		message : 'I am about to go on reddit! Help me!'
	// 	}
	// },
	// {
	// 	site : "dominoes.com", time : "5", actions :  {
	// 		text : [{name : "Dan K", number : 9739450937},
	// 				{name : "Abe K", number : 1083939432}
	// 		],
	// 		message : 'I am about to go on dominoes! Help me!'
	// 	}
	// }
	// ];

	// localStorage['actions'] = JSON.stringify(actions);

	// actions
	var actions = JSON.parse(localStorage['actions']);

	// post to /config 
	// post this data to /action 

	var data = {id : "blahblah", phonenumbers : ["+19739450937"]};

	var html = "";
	for (j=0; j<actions.length; j++) {
		
		//header
		html += "<div class='siteName'>" + actions[j].site + " for longer than " + actions[j].time + " minutes <br/>" ;
		
		//text messages

		//add data-site !!
		var texts = actions[j].actions.text;
		if (texts.length != 0) {
			html += "<strong>Text:</strong>";
			for (i=0; i<texts.length;i++) {	
				html += "<div class='actionContainer'>";
				html += "<input type='text' class='name' value='" + actions[j].actions.text[i].name + "' data-site='" + actions[j].site + "'></input> at ";
				html += "<input class='number' type='text' value='" + actions[j].actions.text[i].number + "' data-site='" + actions[j].site + "'></input>";
				html += "</div>";
			}
			html += "<p>This message: <input type='text' value='" + actions[j].actions.message + "' data-site='" + actions[j].site + "'></input></p>";
		}
		html += "</div></div>";
	}

	html += "<button class='saveEdits'>Save Edits</button>";

	$("#listActions").append(html);

	$(".saveEdits").on("click", saveEdits());
});

function saveEdits() {
	// var inputs = $("input:text.name");
	// localStorage['actions'] = [];
	// $.each(inputs, function() {
	// 	var site = $(this).attr("data-site");
	// 	var name = $(this).attr("value");
	// 	for (i=0; i<localStorage['actions'].length; i++) {
	// 		if (localStorage['actions'][i].site == site) {
	// 			localStorage['actions'][i].site.actions.text.name = name;
	// 		}
	// 	}
	// });
}

