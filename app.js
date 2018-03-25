var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3003,function(req,res){
	console.log("your app is runninng on port 3003");
})
var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database:'ahmad'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(bodyParser.json());
app.post('/signup',function	(req,res){
var empname = req.body.empname;
var salary = req.body.salary;
var sql = "insert into `tblemp` (`empname`,`salary`) VALUES (?,?)";
var values = [empname,salary];
con.query(sql,values,function(err,result){
	if(err) {
		console.log("getting err");
	}else{
		console.log("success");
	}
})
console.log("working")
})