const db = require('./db');
const fs = require('fs');
const http = require('http');
const ndjson = require('ndjson');
const pg = require('pg');
const QueryStream = require('pg-query-stream');
const URL = require('url');

module.exports = function({ cwd = process.cwd() } = {}){
	var apiRequest = /api/;


	const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todos';
	const client = new pg.Client(connectionString);
	client.connect();

	var BUFFER = 500;
	var COUNT = 500;

	var server = http.createServer(function(req, res){
		var parsed = URL.parse(req.url);

		if(parsed.pathname === '/api/todos.json') {
			var cc = `select * from todos order by id limit ${COUNT}`;
			var query = client.query(cc);
			var allData = [];
			query.on('row', function(row) {
      	allData.push(row);
			})
			query.on('error', function(err){
				console.error(err);
			});
			query.on('end', function() {
				res.write(JSON.stringify(allData));
				res.end();
			})
		} else if(parsed.pathname === '/api/todos.ndjson') {
			var cc = `select * from todos order by id limit ${COUNT}`;
			var query = client.query(cc);
			var datas = [];

			query.on("row", function(row){
				datas.push(row);

				if(datas.length === BUFFER) {
					var msg = "";
					datas.forEach(function(row){
						msg += (JSON.stringify(row) + "\n");
					});
					res.write(msg);
					datas.length = 0;
				}
			});

			query.on("end", function(){
				res.end();
			});
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
