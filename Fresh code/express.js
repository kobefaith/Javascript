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


var express = require('express');
,routes = require('./routes');
var app = modules.exports = express.createServer();
app.configure(function(){
    app.set('views',__dirname + '/views');
    app.set('view engine','ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.route);
    app.use(express.static(__dirname + '/public'));
});
app.configure('development',function(){
    app.use(express.errorHandler({dumpExceptions:true,showStack:true}));
});

app.configure('production',function(){
    app.use(express.errorHandler());
});


app.get('/',routes.index);
app.listen(3000);

app.all('/user/:username',function(req,res){
    res.send('all methods captured');
});
app.get('/user/:username',function(req.res){
    res.send('user: '+ req.params.username);
});


function(req,res){
    res.render('userlist',{
        title:'用户列表',
        layout:'admin'
    });
};

var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server  = require('mongodb').Server;
module.exports = new Db(settings.db,new Server(settings.host,Connection.DEFAULT_PORT,{}));



var MongoStore = require('connect-mongo');
app.use(express.session({
    secret:settings.cookieSecret,
    store:new MongoStore({
        db:settings.db
    })
}));