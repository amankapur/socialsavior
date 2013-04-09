var twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);


exports.text = function(req, res){
	console.log (req.body.phonenumbers);

	for(i = 0; i < req.body.phonenumbers.length; i++){
		console.log('sending sms to ', req.body.phonenumbers[i])
		sendSms(req.body.phonenumbers[i], req.body.text);
	}

}


var sendSms = function(number, text){

  twilio.sendSms({to:number, from: '+18625794534', body: text}, function(err, responseData) { 
      if (!err) { 
          console.log(responseData.from); 
          console.log(responseData.body); 
      }
      else {
      	console.log("ERROR", err);
      }
  });

};