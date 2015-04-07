var http      = require('http');
var httpProxy = require('http-proxy');
var exec = require('child_process').exec;
var request = require("request");
var redis = require('redis')

var GREEN = 'http://127.0.0.1:3001';
var BLUE  = 'http://127.0.0.1:3002';

var args = process.argv.slice(2);
var MIRROR = args[0];

var TARGET;
var client_blue = redis.createClient(6379, '127.0.0.1', {})
var client_green = redis.createClient(6380, '127.0.0.1', {})
// client_blue.del("target")
client_blue.lpush("target", GREEN)
var tar = client_blue.rpop("target", function(err, data){
  if (data){
    TARGET = data
    // console.log (TARGET)
    if (data == GREEN){
      console.log("serving BLUE")
      client_blue.del("target")
      elements = client_green.lrange( "images", 0, -1, function(err, data){
        for (var i = 0; i < data.length; i++){
          client_blue.lpush("images", data[i])
        }
      } )
      // console.log(elements)
      client_blue.lpush("target", BLUE)
    }
    else{
      console.log("serving GREEN")
      client_blue.del("target")
      elements = client_blue.lrange( "images", 0, -1 ,function(err, data){
        for (var i = 0; i < data.length; i++){
          client_green.lpush("images", data[i])
        }
      })
      // console.log(elements)
      client_blue.lpush("target", GREEN)
    }
  }
})


var infrastructure =
{
  setup: function()
  {
    // Proxy.
    var options = {};
    var proxy   = httpProxy.createProxyServer(options);

    var server  = http.createServer(function(req, res)
    {
      proxy.web( req, res, {target: TARGET } );
      // console.log("serving: %s", TARGET)
    });
    server.listen(8080);

    // Launch green slice
    if (MIRROR){
    exec('forever start --watch deploy/blue-www/main.js 3001 mirror');
    console.log("blue slice");

    // Launch blue slice
    exec('forever start --watch deploy/green-www/main.js 3002 mirror');
    console.log("green slice"); 
    }
    else{
      exec('forever start --watch deploy/blue-www/main.js 3001');
    console.log("blue slice");

    // Launch blue slice
    exec('forever start --watch deploy/green-www/main.js 3002');
    console.log("green slice");
    }

  },

  teardown: function()
  {
    exec('forever stopall', function()
    {
      console.log("infrastructure shutdown");
      process.exit();
    });
  },
}

infrastructure.setup();

// Make sure to clean up.
process.on('exit', function(){infrastructure.teardown();} );
process.on('SIGINT', function(){infrastructure.teardown();} );
process.on('uncaughtException', function(err){
  console.log(err);
  infrastructure.teardown();} );
