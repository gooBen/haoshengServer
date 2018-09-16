var mysql = require('./Db.js');
var express = require('express');

var app = express();


app.get('/', function(req,res){
	var result = mysql.getQuery('SELECT * from student', function(result){
		res.send(result);
	});

});

app.listen(8801,'127.0.0.1');

console.log('server running in 127.0.0.1:8801');
