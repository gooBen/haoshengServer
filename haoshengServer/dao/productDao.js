var mysql = require('mysql');

var db={};
	
var pool = mysql.createPool({
	host:'localhost',
	connectionLimit: 10,
	user:'root',
	password:'ZHANG',
	database: 'study'
});

var connection = pool.getConnection(function(err){
	if(err){
		console.log('Get connection pool error' + err.message);
	}
	else{
		console.log('Get connection pool success');
	}
});

db.getQuery = function(sql,fun){
	if(!sql){
		return;
	}
	else{
		connection.query(sql,function(err,rows){
			if(err){
				return console.log('Get data fail: '+ err.message);
			}
			else{
				fun(rows);
			}
		});
		connection.release();
	}
};

module.exports = db;

