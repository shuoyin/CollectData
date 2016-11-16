function route(pathname, response, handler){
	console.log('request for '+pathname);
	if(handler[pathname]) handler[pathname](response);
	else handler['on404'](response);
}

exports.route = route;