const db = require('./db');
const fs = require('fs');
const http = require('http');
const ndjson = require('ndjson');

module.exports = function({ cwd = process.cwd() } = {}){
	var apiRequest = /api/;

	var server = http.createServer(function(req, res){

		if(apiRequest.test(req.url)) {
			db().pipe(ndjson.serialize()).pipe(res);
		} else {
			var url = req.url;
			if(url === '/')
				url = '/index.html';

			var out = fs.createReadStream(cwd + url);
			out.pipe(res);

			out.on('error', function(err){
				res.statusCode = 404;
				res.write('Not found');
				res.end();
			});
		}

	});

	server.listen(8080);
	console.log('Server started at: http://localhost:8080');

	return server;
};
