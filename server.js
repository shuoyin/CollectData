var http = require('http');
var url = require('url');
var router = require('./route');
var handler = require('./handler');

http.createServer(function(request, response){
	router.route(url.parse(request.url).pathname, response, handler.handler);
}).listen(8888);
