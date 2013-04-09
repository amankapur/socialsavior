
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/text', function(req, res){

  twilio.sendSms({

      to:'+19739450937', 
      from: '+18625794534', 
      body: 'word to your mother.' 

  }, function(err, responseData) { 

      if (!err) { 
          console.log(responseData.from); 
          console.log(responseData.body); 

      }
  });


});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
