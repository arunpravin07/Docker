var http = require('http');
var fs = require('fs');
//const hostname = '127.0.0.1';

const address = process.env.ADDRESS;
const port = process.env.PORT;
http.createServer(function (req, res) {														
 fs.readFile('arun1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
}).listen(port, address, () => {
  console.log(`Server running at http://${address}:${port}/`);
}).timeout = 700000;

