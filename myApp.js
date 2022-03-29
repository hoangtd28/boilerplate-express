var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.path,"-", req.ip);
  next();
});

function getTime(){
  return new Date().toString();
}
app.get('/now', function(req, res, next) {
  req.time = getTime()
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get('/:word/echo',function(req,res){ res.json({echo: req.params.word})});

app.get ("/", function(req, res) {
   res.sendFile(__dirname + '/views/index.html')
});

app.use('/public', express.static(__dirname + '/public'));

app.get ("/json", function(req, res) {
   if (process.env.MESSAGE_STYLE==='uppercase'){
     res.json({"message": "HELLO JSON"} );}else{
     res.json({"message": "Hello json"});
     }
});


































 module.exports = app;
