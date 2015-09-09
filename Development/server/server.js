var express = require('express');
var http = require('http');
var server = express();

//server.use (express.logger());
//server.use (express.compress());
//server.use (express.methodOverride());
//server.use (express.json());
//server/use (express.urlencoded()));

server.configure(function () {
    'use strict';

	server.set('port', process.env.PORT || 3000);
	server.use(express.logger());
	server.use(express.compress());
	server.use(express.methodOverride());
	server.use(express.json());
	server.use(express.urlencoded());
	server.use(express.cookieParser());
	server.use(express.session({secret : 'BraziliansOpenCongress'}));
	server.use(server.router);
});

server.all('*', function (request, response, next) {
    'use strict';

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	response.header("Content-Type", "application/json");
	next();
});

// Ping
server.get("/Ping", function (request, response) {
    'use strict';

	var body = {'message' : 'ok'};
	response.header('Content-Length', Buffer.byteLength(body));
	response.json(200, body);
	response.end();
});

server.get('/Ping2', function (req, res) {
    'use strict';

	var body = {'response' : 'ok'};
	res.send(body);
});

console.log(server.routes);

http.createServer(server).listen(3000);
