var express = require('express');
var app = express();
var server = require('http').createServer(app);

//指定静态文件的位置
app.use('/dist', express.static(__dirname + '/dist')); 
app.use('/public', express.static(__dirname + '/public')); 
app.use('/',function function_name (req,res) {
	 res.redirect('/public');
}); 

//监听端口号
server.listen(3000);
console.log("3000 端口已开启，访问形式如：http://127.0.0.1:3000/index.html ");