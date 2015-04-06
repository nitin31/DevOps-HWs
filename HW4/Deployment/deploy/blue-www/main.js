var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var http      = require('http');
var httpProxy = require('http-proxy');
var exec = require('child_process').exec;
var request = require("request");

var app = express()

var GREEN = 'http://127.0.0.1:3001';
var BLUE  = 'http://127.0.0.1:3002';

var SWITCH_TARGET = GREEN

var args = process.argv.slice(2);
var PORT = args[0];
var MIRROR = args[1]; 
// console.log(PORT)

console.log(MIRROR);
// Comment
//Redis client on port 6379 for BLUE 
var client = redis.createClient(6379, '127.0.0.1', {})

//Redis client on port 6379 for GREEN
var client_other = redis.createClient(6380, '127.0.0.1', {})
app.use(function(req, res, next) 
{
	console.log(req.method, req.url);
	client.lpush(["sites", req.url], function(err, reply){
	})
	client.ltrim("sites", 0, 4)
	next(); // Passing the request to the next handler in the stack.
});


app.get('/', function(req, res) 
{
	res.send("!This is a test with redis and multer with watch flags!! This is BLUE :: ");
});

app.get('/upload',[ multer({ dest: './uploads/'}) , function(req, res) {
	{
		res.sendfile("/home/nitin/Desktop/App/index.html")
	}
}]);

app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files

    if( req.files.userPhoto )
    {
	   fs.readFile( req.files.userPhoto.path, function (err, data) {
	  		if (err) throw err;
	  		var img = new Buffer(data).toString('base64');
	  		if (MIRROR){
		    	client.lpush("images", img)
		    	client_other.lpush("images", img)
	  		}
	  		else{
	  			client.lpush("images", img)
	  		}
		});
	}

	res.sendfile("/home/nitin/Desktop/App/index.html")
    //res.status(204).end()
}]);

app.get('/meow', function(req, res){
	var img = client.rpop("images", function(err, data){
		console.log(data);
		if(err) throw err;
		if (data){
			res.writeHead(200, {'content-type':'text/html'});
			res.write("<h1>\n<img src='data:my_pic.jpg;base64,"+data+"'/>");
			res.end();
		}
		else{
			res.send("No images in the queue");
		}
	})
	//console.log(img)
})

app.get('/', function(req, res) {
	{
		console.log("hello world")
		res.send("hello world")
	}
})

app.get('/get', function(req, res) {
	{
		client.get("key", function(err,value){
		console.log("got key with value: " + value)
		console.log("..............................")
		res.send("We got the key value as: " + value)});
	}
})

app.get('/set', function(req, res) {
	{
		var value = "this message will self-destruct in 10 seconds."
		console.log("generating a key: "+value)
		console.log("the key expires in 10 seconds")
		console.log("..............................")
		client.set("key", value)
		client.expire("key", 10)
		res.send("key : " + value)
	}
})

app.get('/recent', function(req, res) {
	{
		var s = ""
		var v1 = client.lrange("sites", 0, 4, function(err, result){
			console.log("Recently visited sites: " + result)
			console.log("..............................")
			res.send(result.toString())
		})
	}
})

app.get('/switch', function(req, res){
	{
		exec('forever restart /home/nitin/Desktop/Deployment/infrastructure.js');
		res.send('/')
	}
})

var server = app.listen(PORT, function () {

	var host = server.address().address
	var port = server.address().port

	if (port == '3001'){
		SWITCH_TARGET = BLUE
	}
	if (port == '3002'){
		SWITCH_TARGET = GREEN
	}

	console.log('Example app listening at http://%s:%s', host, port)
});
