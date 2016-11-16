var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	console.log(url.parse(request.url));
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('index.html', 'utf8', function(error, data){
		response.end(data)
	});
}).listen(8888);
