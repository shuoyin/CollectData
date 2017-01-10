function route(pathname, response, handler, postdata){
	console.log('request for '+pathname);
	if(postdata){
		handler[pathname](response, postdata);
		return;
	}
	if(handler[pathname]) handler[pathname](response);
	else handler['on404'](response);
}

exports.route = route;