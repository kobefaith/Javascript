var crypto = require('crypto');
var user = require('../models/user.js');
module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index',{
            title:'首页'
        });
    });
    app.get('/reg',checkNotLogin);
    app.get('/reg',function(req,res){
        res.render('reg',{
        title:'用户注册',
        });
    });
    app.post('/reg',checkNotLogin);
    app.post('/reg',function(req,res){
        if(req.body['password-repeat'] != req.body['password']){
            req.flash('error','两次输入的口令不一致');
            return res.redirect('/reg');
        }
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
  app.get('/login',checkNotLogin);
  app.get('/login',function(req,res){
      res.render('login',{
      title:'用户登录',
      });
   });
   app.post('/login',checkNotLogin);
   app.post('/login',function(req,res){
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    User.get(req.body.username,function(err,user){
        if(!user){
            req.flash('error','用户不存在');
            return res.redirect('/login');
        }
        if(user.password != password){
            req.flash('error','用户口令错误');
            return res.redirect('/login');
        }
        req.session.user = user;
        req.flash('sucess','登录成功');
        res.redirect('/');
    });
  });
  app.get('/logout',checkLogin);
  app.get('/logout',function(req,res){
   req.session.user = null;
   req.flash('sucess','登出成功') ;
   res.redirect('/');   
  });  
};
function checkLogin(req,res,next){
    if(!req.session.user){
        req.flash('error','未登录');
        return res.redirect('/login');
    }
    next();
}
function checkNotLogin(req,res,next){
    if(req.session.user){
        req.flash('error','已登录');
        return res.redirect('/');
    }
    next();
}


