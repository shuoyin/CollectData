var fs = require('fs')

function onindex(response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('index.html', 'utf-8', function(error, data){
		response.write(data);
		response.end();
	});
}

function onsrcjs(response){
	response.writeHead(200, {'Content-Type': 'text/javascript'});
	fs.readFile('src.js', 'utf-8', function(error, data){
		response.write(data);
		response.end();
	});
}

function on404(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('404 NOT Found');
	response.end();
}

var handler = {
	'/': onindex,
	'/index.html': onindex,
	'/src.js': onsrcjs,
	'on404': on404
}

exports.handler = handler;