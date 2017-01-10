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

function ondata(response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('data.json', 'utf8', function(error, data){
		response.write(data);
		response.end();
	});
}

function on404(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('404 NOT Found');
	response.end();
}

function onupload(response, postdata, filename){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile(filename, 'utf8', function(err, data){
		postdata = postdata.replace(/{/, '\n\t{\n\t\t');
		postdata = postdata.replace(/}/, '\n\t}');
		postdata = postdata.replace(/,"/g, ',\n\t\t"');
		data = data[0] + postdata + ',' + data.slice(1);
		fs.writeFile(filename, data);
	});
	response.write('Successfully upload');
	response.end();
}

function onuploadData(response, postdata){
	onupload(response, postdata, 'data.json');
}

function onuploadMes(response, postdata){
	onupload(response, postdata, 'message.json');
}

var handler = {
	'/': onindex,
	'/index.html': onindex,
	'/src.js': onsrcjs,
	'/data.json': ondata,
	'/uploadData': onuploadData,
	'/uploadMes': onuploadMes,
	'on404': on404
}

exports.handler = handler;