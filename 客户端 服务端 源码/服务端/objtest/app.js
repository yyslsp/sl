var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var cookiesession = require('cookie-session');
var cors = require('cors')




var app = express();

// 设置ejs模板引擎目录
app.set('views', path.join(__dirname, 'views'));//到views目录找ejs目录
app.set('view engine', 'ejs');//设定使用express后端渲染引擎是ejs

app.use(logger('dev'));//安装命令看日志

//body-parser被继承到到express内部了 配置body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false }));
// app.use(cookieParser());

//配置中间件
// multer的配置
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //判断是不是注册
    if(req.url.includes('reg')){
      cb(null,path.join(__dirname,'public','upload','user'))
    }else if(req.url.includes('banner')){
      cb(null,path.join(__dirname,'public','upload','banner'))
    }else{
      cb(null,path.join(__dirname,'public','upload','product'))
    }
  },

  // filename: function (req, file, cb) {
  //   cb(null, file.fieldname + '-' + Date.now())
  // }
})
let upload = multer({storage});
app.use(upload.any());//允许任何文件的上传

//cookie-session 的配置
app.use(cookiesession({
  name:'2088',
  keys:['aa','bb','cc'],
  maxAge:1000*60*60*24
}))

//解决跨域问题
app.use(cors({
  //允许所有前端域名
  "origin": ["http://127.0.0.1:3000"],  
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

//资源托管前端
app.use(express.static(path.join(__dirname,'public','template')));
//资源托管后端
app.use('/admin',express.static(path.join(__dirname,'public','admin')));
//资源托管图片
app.use(express.static(path.join(__dirname,'public')));

//响应



//客户端 

//token,暴漏出的是对象
let jwt = require('./utils/jwt');


//登陆接口
app.use('/api/login',require('./routes/api/login'))
//注册接口
app.use('/api/reg',require('./routes/api/reg'))
//截获一类api
app.all('/api/*',require('./routes/api/params'))

//用户接口
app.use('/api/user',require('./routes/api/user'))

// app.use('/api/home',require('./routes/api/home'))
//动态查询详情接口 ，//查询列表接口
app.use('/api/list',require('./routes/api/list'))

//关注接口
// app.use('/api/follow',require('./routes/api/follow'))
//栏目接口
// app.use('/api/column',require('./routes/api/column'))







//管理端 /后端 
//导入路由
app.use('/admin', require('./routes/admin/index'));
app.use('/admin/users', require('./routes/admin/users'));
app.use('/admin/banner', require('./routes/admin/banner-json'));




//代理端

// 推送端

// //处理错误
app.use(function(req, res, next) {
  next(createError(404));
});

// 处理错误信息 在响应体上的参数
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  //判断前端发过来的地址是否带api
  //访问前端
  if(req.url.includes('/api')){
    res.send({
      err:1,
      msg:'不存在的接口'
    })
    
    //访问后端
  }else if(req.url.includes('/admin')){
    res.render('error');//后端渲染错误页面
  }else{
    res.sendFile(path.join(__dirname,'public','template','404.html'))
  }
});

module.exports = app;
