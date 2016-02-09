var express = require('express');
var app = express.createServer();
app.use(express.bodyParser());
app.all('/',function(req,res){
res,send(req.body.title + req.body.text);
});
app.listen(3000);

app.get('/user/:username',function(req,res){
    res.send('user:' + req.params.username);
});
