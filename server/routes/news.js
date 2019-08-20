const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登陆接口 myAjax
//2.userlist查get不需要参数
router.get("/",(req,res)=>{
	var sql="select * from news";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
//导出路由器对象
module.exports=router;