var twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);


exports.text = function(req, res){
	console.log(req.body.name);
  console.log(req.body.number);

  sendSms(req.body.number, req.body.name)

}


var sendSms = function(number, name){

  text = 'Hey!, ' + name + " I need help, call me now. ";
  
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