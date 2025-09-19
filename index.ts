import * as http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello World');
});

const PORT = 8888;
server.listen(PORT, () => {
  console.log('サーバーが起動しました');
});
