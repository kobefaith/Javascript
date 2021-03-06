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
app.use(express.route(routes));


module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{
            title:'首页'
        });
    });
    app.get('/reg',function(req,res){
        res.render('reg',{
            title:'用户注册',
        });
    });
};



app.post('/reg',function(req,res){
    if(req.body['password-repeat'] != req.body['password']){
       req.flash('error','两次输入的口令不一致') ;
       return res.redirect('/reg');
    }
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    var newUser = new User({
        name:req.body.username,
        password:password,        
    });
    User.get(newUser.name,function(err,user){
        if(user)
            err = 'Username already exists.';
        if(err){
            req.flash('error',err);
            return res.redirect('/reg');
        }
        newUser.save(function(err){
            if(err){
                req.flash('error',err);
                return res.redirect('/reg');
            }
            req.session.user = newUser;
            req.flash('sucess','注册成功');
            res.redirect('/');
        });
    });
});