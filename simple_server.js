// A minimal HTTP server that binds to port 5000
import http from 'http';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('TaskAI server is running\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Simple server running at http://0.0.0.0:${port}/`);
});