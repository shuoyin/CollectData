var http = require('http');
var url = require('url');
var router = require('./route');
var handler = require('./handler');

http.createServer(function(request, response){
	console.log(request.method.toLowerCase());
	if(request.method.toLowerCase() == 'post'){
		postdata = '';
		request.addListener('data',function(datachunk){
			postdata += datachunk;
			console.log('Received: ' + datachunk);
		});
		request.addListener('end', function(){
			router.route(url.parse(request.url).pathname, response, handler.handler, postdata);
		})
	}
	else router.route(url.parse(request.url).pathname, response, handler.handler);
}).listen(2333);
