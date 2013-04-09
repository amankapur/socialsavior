$(document).ready(function() {
	var actions = [
		{site : "reddit.com", time : "5", actions : {
			text : [{name : "Dan K", number : 9739450937},
					{name : "Abe K", number : 1083939432}
			],
			call : [{name : "Aman Kapur", number : 1082235585}],
			email : [{name : "Abe Kim", address : "abe@students.olin.edu"}],
			hangout : [{name : "Michael Maloney", account : "plus.google.com/mmaloney"}]
		}
	},
	{
		site : "dominoes.com", time : "5", actions :  {
			text : [{name : "Dan K", number : 9739450937},
					{name : "Abe K", number : 1083939432}
			],
			call : [{name : "Aman Kapur", number : 1082235585}],
			email : [{name : "Abe Kim", address : "abe@students.olin.edu"}],
			hangout : [{name : "Michael Maloney", account : "plus.google.com/mmaloney"}]			
		}
	}
	];

	var html = "";
	for (j=0; j<actions.length; j++) {
		//text messages
		html += "<p>" + actions[j].site + " for longer than " + actions[j].time + " minutes <br/></p>" ;
		var texts = actions[j].actions.text;
		if (texts.length != 0) {
			html += "<strong>Text:</strong>";
			for (i=0; i<texts.length;i++) {	
				html += "<p><strong> " + actions[j].actions.text[i].name + "</strong> at " + actions[j].actions.text[i].number + "</p>";
			}
		}
		html += "<button>Edit</button></div>";
	}


	$("#listActions").append(html);
	
});
