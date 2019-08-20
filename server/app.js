const express=require('express');
//引入用户路由器
const newsRouter=require('./routes/news.js');
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//托管静态资源到public
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器挂载到/user目录下
app.use('/news',newsRouter);
