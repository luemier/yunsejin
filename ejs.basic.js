var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
	fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
		response.writeHead(200, {'Content-type': 'text/html' });
		//response.end(ejs.render(data));
		response.end(ejs.render(data, {
			name : 'yunsejin',
			desc : 'genius !!!'
		}));
	});
}).listen(52273, function () {
	console.log('Server Running at htt://127.0.0.1:52273');
});


