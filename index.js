const http = require('http');

const hostname = "localhost";
const port = "3000";

const server = http.createServer((req,res) => {
  console.log(req.headers);

  req.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  res.end("<html><body><h1>Hell0 World</body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
