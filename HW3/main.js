var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')

var http = require('http')
var args = process.argv. splice(2);

var app = express()
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})

///////////// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
{
	console.log(req.method, req.url);
	client.lpush(["sites", req.url], function(err, reply){
	})
	client.ltrim("sites", 0, 4)
	next(); // Passing the request to the next handler in the stack.
});


app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files

    if( req.files.userPhoto )
    {
	   fs.readFile( req.files.userPhoto.path, function (err, data) {
	  		if (err) throw err;
	  		var img = new Buffer(data).toString('base64');
	  		console.log(img);
		    client.lpush("images", img)
		});
	}

	res.sendfile("index.html")
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


app.get('/upload',[ multer({ dest: './uploads/'}) , function(req, res) {
	{
		res.sendfile("index.html")
	}
}]);



// HTTP SERVER
var server = app.listen(3001, function () {

   var host = server.address().address
   var port = server.address().port

   console.log('Example app listening at http://%s:%s', host, port)
})


var server1 = app.listen(3002, function () {

	var host = server1.address().address
	var port = server1.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})

var server2 = app.listen(3003, function () {

	var host = server2.address().address
	var port = server2.address().port

	console.log('Example app listening at http://%s:%s', host, port)
})
