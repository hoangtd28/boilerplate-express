var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(  bodyParser.urlencoded({extended: false}));

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

app.get('/name', function(req,res){
  res.json({name:req.query.first+" "+req.query.last})
})

app.post('/name', function(req,res){
  res.json({name:req.body.first+" "+req.body.last})
})

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
