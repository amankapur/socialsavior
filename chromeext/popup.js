$(document).ready(function() {


	$("#peeps").on('click', function(){
	
		peeps = this;
		placeholder = $($(peeps).siblings('div')[0]).children()

		text = "<div class='savior'> <input id='textee-name' type='text' placeholder='Enter name of person...'></input><input id='textee-number' type='text' placeholder='+1-XXX-XXX-XXXX'></input></div>   "
		$(placeholder).append(text);
	
	});

	$("#url").on('click', function(){

		console.log('url click');

		text= " <div class='action'> <h3> When I go to...</h3> <input type='text' placeholder='Enter website'></input> <h3> Text these people to save me ... </h3> <button id='peeps'>Add more peeps </button> <div id='textees'><div class='savior'><input id='textee-name' type='text' placeholder='Enter name of person...''></input><input id='textee-number' type='text' placeholder='+1-XXX-XXX-XXXX'></input></div></div><hr></div>";

		$(".listActions").append(text);
	});

	$("#save").on('click', function(){
		$.each($(".action"), function(index,value){

			inputs = $(value).find('input');
			arr = {}

			if($(inputs[0]).val() == []){
				$("#error").show(1000, function(){
						location.reload();
				});
			}

			url = $(inputs[0]).val()
			friends = []
			for(var i =1; i< inputs.length; i= i+2){
				name = $(inputs[i]).val();
				number = $(inputs[i+1]).val();

				if(name == [] || number == []) {
					$("#error").show(1000, function(){
						location.reload();
					});
				}
				friends.push(name);
				friends.push(number);
			}
			console.log(url);
			console.log(friends);

			

			if (url != [] && name!=[] && number != []){
				localStorage.setItem(url, friends);
				$("#saved").show(1000, function(){
					location.reload();
				});

			}

		});
	});

	// if (!localStorage['id']) {
	// 	var id = (Math.random() * 100000000000000000).toString();
	// 	localStorage['id'] = id;
	// }

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

	$(".listActions").append(html);

	$(".saveEdits").on("click", saveEdits());
});



function isOdd(value) {
return (value%2 == 1);
}

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

