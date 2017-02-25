const db = require('./db');
const fs = require('fs');
const http = require('http');
const ndjson = require('ndjson');
const pg = require('pg');

module.exports = function({ cwd = process.cwd() } = {}){
	var apiRequest = /api/;
	

	const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
	const client = new pg.Client(connectionString);
	

	var server = http.createServer(function(req, res){

		if(apiRequest.test(req.url)) {
			//db().pipe(ndjson.serialize()).pipe(res);
			client.connect(connectionString,function(err, client, done)  {
				if (err) {
					console.log(err);
					throw err;
				}
				const query = client.query('Select * from todos');
				query.on('row', (row) => {
					console.log(row);
			      	res.write(row);
			    });
			})
	
			
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
