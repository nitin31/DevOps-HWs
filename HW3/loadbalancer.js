var redis = require('redis')
var express = require('express')
var app = express()
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})

app.get('*', function(req, res) {
    {
        var redirect_to_server = client.rpop("servers", function(err, data){
            console.log(data+req.url)
            client.lpush("servers", data)
            res.redirect(data+req.url)
        })
    }
})
// HTTP SERVER
var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Load Balancer listening at http://%s:%s', host, port)
})
